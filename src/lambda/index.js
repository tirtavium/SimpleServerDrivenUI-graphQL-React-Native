const coronaService = require('./CoronaService');
exports.handler = (event, context, callback) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    
    let header = [{"id":1,"viewType":"image","data":"https://www.cabrini.edu/globalassets/images-website/covid/covid-19-header_1200.jpg?width=480"}];
    let data1 = [{"id":1,"viewType":"label","data":"Kasus Covid-19 di Indonesia","color":"#7cbb00"}];
    let topData = [{"id":1,"viewType":"label","data":""}];

    console.log("Got an Invoke Request.");
    switch(event.field) {
        case "listRootComponents":
            const data = coronaService.requestSummary()
            data.then(res => {
            try {
                const result = JSON.parse(res)
                const infected = {"id":1,"viewType":"card","data":result.confirmed+" Terkonfirmasi","color":"#3363FF"};
                const cured = {"id":2,"viewType":"card","data":result.recovered+" Sembuh","color":"#7cbb00"};
                const inpatient = {"id":3,"viewType":"card","data":result.activeCare+" Dalam Perawatan","color":"#FFBA33"};
                const died = {"id":4,"viewType":"card","data":result.deceased+" Meninggal","color":"#FF5733"};
                const list1 = [infected,died];
                const list2 = [cured,inpatient];
                const viewsType = [{"id":1,"viewType":"LINE", "components":topData,"color":"#1D2754"},{"id":2,"viewType":"FULL","components":header,"color":"#7cbb00"},{"id":3,"viewType":"LINE", "components":data1,"color":"#fff"},{"id":4,"viewType":"FULL","components":list1,"color":"#fff"},{"id":5,"viewType":"FULL","components":list2,"color":"#fff"}];
                callback(null, viewsType);
            } catch(err) {
                console.error(err)
            }})
            data.catch(err => {
                console.log('error', err)
                callback(err);
            });
           
            break;
        default:
            callback("Unknown field, unable to resolve" + event.field, null);
            break;
    }
};
