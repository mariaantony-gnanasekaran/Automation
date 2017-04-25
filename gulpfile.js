var gulp = require('gulp');
var Karma = require('karma').Server;
var mail = require('gulp-mail');

gulp.task('tdd', function (done) {
  new Karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
var smtpInfo = {
  auth: {
    user: 'mariaantony.gnanasekaran@syncfusion.com',
    pass: 'Praveen@1994'
  },
  host: 'smtp.office365.com',
  tls: { ciphers: 'SSLv3' },
  port: 587
};

gulp.task('mail', function () {
  return gulp.src('./report/report.html')
    .pipe(mail({
      subject: 'Report',
      to: [
        ""
      ],
      from: 'Maria <mariaantony.gnanasekaran@syncfusion.com>',
      smtp: smtpInfo
    }));
});