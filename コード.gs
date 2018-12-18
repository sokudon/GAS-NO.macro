/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8";
var sname="周回のるま";

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = sheets.getLastRow()-1;
　var last_col = 2;//sheets.getLastColumn()-2;
  
  
  var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var k=1;
  var ex=1;
  
  for(var i=1;i<values.length;i++){
    if(i==values.length-1){
    values[i][0]="e"+ex;
      ex++;
    }
    else if(values[i][1]=="all"){
    //values[i][0]="a"+("0"+ k).slice(-2);
    k++;
    }
    else{
    values[i][0]=i;
    }
  
  }
  sheets.getRange(1,1,last_row ,last_col).setValues(values);
  
  
  //var str='var BD=' + JSON.stringify(values);
  //var str= "var BD = [" +values + "]";
  
  //return ContentService.createTextOutput(str).setMimeType(ContentService.MimeType.JAVASCRIPT);
  //JSON.stringify(sheet.getName());
}

function wmap_getSheetsName(sheets){
  //var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}


function onOpen() {
  var ui = SpreadsheetApp.getUi();           // Uiクラスを取得する
  var menu = ui.createMenu('曲番号まくろ');  // Uiクラスからメニューを作成する
  menu.addItem('アイテム1', 'doGet');   // メニューにアイテムを追加する
  menu.addToUi();                            // メニューをUiクラスに追加する
}