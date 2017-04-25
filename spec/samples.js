import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
initialize();
import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
window.sample = ["grid", "gridTemplate", "button", "chart", "circulargauge", "datepicker", "colorpicker", "listview", "dropdownlist", "autocomplete"];
window.prop = {
    "grid": { "control": "ejGrid", "resources": ["aurelia-syncfusion-bridge/grid/grid", "aurelia-syncfusion-bridge/grid/column"], "view": '<ej-grid e-data-source.two-way="data" id="ejSample" ><ej-column e-field="EmployeeId"></ej-column ><ej-column e-field="FirstName"></ej-column ><ej-column e-field="LastName"></ej-column ></ej-grid>', "bound": { data: [{ EmployeeId: 1, FirstName: "Nancy", LastName: "Davolio" }, { EmployeeId: 2, FirstName: "Andrew", LastName: "Fuller" }] } },
    "gridTemplate": { "control": "ejGrid", "resources": ["aurelia-syncfusion-bridge/grid/grid", "aurelia-syncfusion-bridge/grid/column", "aurelia-syncfusion-bridge/common/template", "aurelia-syncfusion-bridge/button/button"], "view": '<ej-grid e-data-source.bind="data" id="ejSample" ><ej-column e-field="OrderID"><ej-template><input ej-button="e-text:edit" /><ej-template></ej-column ></ej-grid>', "bound": { data: [{ OrderID: 1 }] } },
    "button": { "control": "ejButton", "resources": "aurelia-syncfusion-bridge/button/button", "view": '<input id="ejSample" ej-button="e-text:click" />', "bound": {} },
    "chart": { "control": "ejChart", "resources": ["aurelia-syncfusion-bridge/chart/chart", "aurelia-syncfusion-bridge/chart/series"], "view": '<ej-chart id="ejSample" ><ej-series  e-data-source.bind="ExpendituresList" e-type="pie" e-x-name="xName" e-y-name="yName"></ej-series> </ej-chart>', "bound": { ExpendituresList: [{ xName: 'Other Personnal', yName: 94658, text: 'Other Personal,  88.47%' }, { xName: 'Medical care', yName: 9090, text: 'Medical care,  8.49%' }, { xName: 'Housing', yName: 2577, text: 'Housing,  2.40%' }, { xName: 'Transportation', yName: 473, text: 'Transportation,  0.44%' }, { xName: 'Education', yName: 120, text: 'Education,  0.11%' }, { xName: 'Electronics', yName: 70, text: 'Electronics,  0.06%' }] } },
    "circulargauge": { "control": "ejCircularGauge", "resources": "aurelia-syncfusion-bridge/circulargauge/circulargauge", "view": '<ej-circular-gauge id="ejSample" e-background-color="transparent" e-enable-animation="false" e-width="500" e-scales.bind="scales"></ej-circular-gauge>', "bound": { scales: [{ showRanges: true, startAngle: 122, sweepAngle: 296, radius: 130, showScaleBar: true, size: 1, maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10, border: { width: 0.5 }, pointers: [{ value: 60, showBackNeedle: true, backNeedleLength: 20, length: 95, width: 7, pointerCap: { radius: 12 } }], ticks: [{ type: 'major', distanceFromScale: 2, height: 16, width: 1, color: '#8c8c8c' }, { type: 'minor', height: 8, width: 1, distanceFromScale: 2, color: '#8c8c8c' }], labels: [{ color: '#8c8c8c' }], ranges: [{ distanceFromScale: -30, startValue: 0, endValue: 70 }, { distanceFromScale: -30, startValue: 70, endValue: 110, backgroundColor: '#fc0606', border: { color: '#fc0606' } }, { distanceFromScale: -30, startValue: 110, endValue: 120, backgroundColor: '#f5b43f', border: { color: '#f5b43f' } }] }] } },
    "datepicker": { "control": "ejDatePicker", "resources": "aurelia-syncfusion-bridge/datepicker/datepicker", "view": '<input id="ejSample" ej-date-picker="e-value.bind:dateValue" />', "bound": { dateValue: new Date() } },
    "colorpicker": { "control": "ejColorPicker", "resources": "aurelia-syncfusion-bridge/colorpicker/colorpicker", "view": '<input id="ejSample" ej-color-picker="e-value:#278787" />', "bound": {} },
    "listview": { "control": "ejListView", "resources": "aurelia-syncfusion-bridge/listview/listview", "view": '<ej-list-view  id="ejSample" e-show-header="true" e-header-title="Favorite" e-width="400"><ul><li data-ej-text="Discover Music"><ul><li data-ej-text="Hot Singles"></li><li data-ej-text="Rising Artists"></li><li data-ej-text="Live Music"></li></ul></li></ul> </ej-list-view>', "bound": {} },
    "dropdownlist": { "control": "ejDropDownList", "twoway": true, "optionkey": "value", "optionvalue": "Audi A4", "resources": "aurelia-syncfusion-bridge/dropdownlist/dropdownlist", "view": '<input type="text"  ej-drop-down-list="e-target-id.bind:target;e-value.two-way:value;" id="ejSample" /><input type="text"  ej-drop-down-list="e-target-id.bind:target1;e-value.two-way:value;" id="ejSample1" /><div id="carsList"><ul><li>Audi A4</li><li>Audi A5</li></ul></div><div id="List"><ul><li>Audi A4</li><li>Audi A5</li></ul></div>', "bound": { target: "carsList", target1: "List", value: "Audi A5", watermarkText: "Select a car" } },
    "autocomplete": {
        "control": "ejAutocomplete", "twoway": true, "optionkey": "value", "optionvalue": "BMW 7", "resources": "aurelia-syncfusion-bridge/autocomplete/autocomplete", "view": '<input type="text"  id="ejSample" ej-autocomplete="e-width.bind:width; e-value.two-way:value; e-data-source.bind: carList;" /><input type="text"  id="ejSample1" ej-autocomplete="e-width.bind:width; e-value.two-way:value; e-data-source.bind: carList;" /> ', "bound": { width: "100%", value: "Audi S6", carList: ['Audi S6', 'Austin-Healey', 'Alfa Romeo', 'Aston Martin', 'BMW 7', 'Bentley Mulsanne', 'Bugatti Veyron'] }
    },
};
for (let i = 0; i < window.sample.length; i++) {
    if (i == 0)
        theme();
    describe('', () => {
        let component;
        let c = window.sample[i];
        let prop = window.prop[c];
        beforeEach(() => {

            component = StageComponent
                .withResources(prop.resources)
                .inView(prop.view)
                .boundTo(prop.bound);
        });

        it(`${c} component rendered`, done => {
            component.create(bootstrap).then(() => {
                let pluginName;
                pluginName = $("#ejSample").data(prop.control).pluginName
                expect(pluginName).toBe(prop.control);
                if (prop.twoway) {
                    let instance1;
                    let instance2;
                    component._bindingContext[prop.optionkey] = prop.optionvalue;
                    setTimeout(() => {
                        instance1 = $("#ejSample").data(prop.control).model[prop.optionkey]();
                        instance2 = $("#ejSample1").data(prop.control).model[prop.optionkey]();
                        expect(instance1).toBe(prop.optionvalue);
                        expect(instance1).toBe(instance2);
                        done();
                    })
                }
                else
                    done();
            }).catch(e => { console.log(e.toString()) })

        });
        afterEach(() => {
            component.dispose();
        });
    });
}
function theme() {
    var TPath = System.normalizeSync(`syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.web.all.min.css!`);
    if (System.has(TPath)) {
        System.delete(TPath);
    }
    return System.import(TPath)
}