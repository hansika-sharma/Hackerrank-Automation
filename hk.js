const { text } = require('figlet');
const puppeteer = require('puppeteer');
const codeobj = require('./code.js')
let page;
let browserOpen = puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
})

browserOpen
    .then(function (browser) {
    const browserOpenPromise = browser.pages();
    return browserOpenPromise;
    }).then(function (browserpages) {
    page = browserpages[0];
    const gotoPagePromise = page.goto("https://www.google.com/");
    return gotoPagePromise;
    }).then(function () {
        let elemwaitPromise = page.waitForSelector(".gLFyf.gsfi");
        return elemwaitPromise;
    }).then(function () {
        let getSelector = page.type(".gLFyf.gsfi","hackerrank login");
        return getSelector;
    }).then (function () {
        let enterWillBepressed = page.keyboard.press("Enter");
        return enterWillBepressed
    }).then (function () {
        let elemwaitPromise = page.waitForSelector(".yuRUbf .LC20lb.MBeuO.DKV0Md", {visible:true});
        return elemwaitPromise;
    }).then (function () {
        let getFirstlink = page.click(".yuRUbf .LC20lb.MBeuO.DKV0Md");
        return getFirstlink;
    }).then (function () {
        let elemwaitPromise = page.waitForSelector("a[href='https://www.hackerrank.com/login']", {visible:true});
        return elemwaitPromise;
    }).then (function () {
        let getLogin = page.click("a[href='https://www.hackerrank.com/login']");
        return getLogin;
    }).then(function () {
        let elemwaitPromise = page.waitForSelector("input#input-1",{visible:true}); //input[type='text']
        return elemwaitPromise;
    }).then (function () {
        let enterUsername = page.type("input#input-1","example@gmail.com");
        return enterUsername;
     }).then (function () {
        let elemwaitPromise = page.waitForSelector("input#input-2.input",{visible:true});
        return elemwaitPromise;
    }).then (function () {
        let enterPassword = page.type("input#input-2.input","Your password");
        return enterPassword;
    }).then (function () {
        let elemwaitPromise = page.waitForSelector("button[data-analytics='LoginPassword']", {visible:true});
        return elemwaitPromise;
    }).then (function () {
        let getUserLogin = page.click("button[data-analytics='LoginPassword']");
        return getUserLogin;
     })
    .then (function () {
        let elemwaitPromise = page.waitForSelector(".track-name", {visible : true});
        return elemwaitPromise;
    }).then (function () {
        let clickAlgorithm = page.click(".track-name");
        return clickAlgorithm;
    }).then (function () {
        let elemwaitPromise = page.waitForSelector("input[value='warmup']", {visible : true});
        return elemwaitPromise;
    })
    .then (function () {
        let clickOnWarmup = page.click("input[value='warmup']");
        return clickOnWarmup;
    }).then (function () {
        let elemwaitPromise = page.waitForSelector('.challenge-submit-btn', {visible : true});
        return elemwaitPromise;
    }).then (function () {
        let getAllChallenges = page.$$('.challenge-submit-btn');
        return getAllChallenges;
    }).then (function (quesArr) {
        //console.log("number of question", quesArr.length);
        // console.log(quesArr[0]);
        let quesWillSolved = quesSolver(page, quesArr[1], codeobj.ans[0]);
        return quesWillSolved;

    })
    .catch (function (err) {
        console.log(err);
    })


//console.log("after");

function quesSolver(page, question ,answer) {
    return new Promise(function(resolver, reject){
        let questwillbeclicked = question.click();
        //return questwillbeclicked;
        questwillbeclicked.then(function() {
            let elementWaitPromise = page.waitForSelector(".monaco-editor.no-user-select.vs",{visible:true});
            return elementWaitPromise;
        }).then (function () {
            let textEditor = page.click(".monaco-editor.no-user-select.vs");
            return textEditor;
        }).then (function() {
            let elemwaitPromise  =page.waitForSelector('input.checkbox-input', {visible : true});
            return elemwaitPromise;
        }).then(function () {
            let clickOnTexteditor = page.click('input.checkbox-input')
            return clickOnTexteditor;
        }).then(function() {
            let elemwaitPromise = page.waitForSelector('.input.text-area.custominput.auto-width', {visible : true})
            return elemwaitPromise
        }).then(function() {
            let typeAns = page.type('.input.text-area.custominput.auto-width', answer , {delay : 10});
            return typeAns;
        }).then(function(){
            let ControlButtonPressed = page.keyboard.down("Control");
            return ControlButtonPressed;
        }).then(function(){
            let buttonAclick = page.keyboard.type("A");
            return buttonAclick;
        }).then(function(){
            let buttonXclick = page.keyboard.type("X");
            return buttonXclick;
        }).then(function(){
            let releaseCTRL = page.keyboard.up("Control");
            return releaseCTRL;
        }).then(function(){
            let elemwaitPromise = page.waitForSelector(".monaco-scrollable-element.editor-scrollable.vs");
            return elemwaitPromise;
        }).then(function(){
            let clickOnTEXTeditor = page.click(".monaco-scrollable-element.editor-scrollable.vs");
            return clickOnTEXTeditor;
        }).then(function(){
            let ControlButtonPressed = page.keyboard.down("Control");
            return ControlButtonPressed;
        }).then(function(){
            let buttonAclick = page.keyboard.type("A");
            return buttonAclick;
        }).then(function(){
            let buttonXclick = page.keyboard.type("V");
            return buttonXclick;
        }).then(function(){
            let releaseCTRL = page.keyboard.up("Control");
            return releaseCTRL;
        }).then(function(){
            let elemwaitPromise = page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled",{visible:true});
            return elemwaitPromise;
        }).then(function(){
            let clickONrun = page.click(".ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled");
            return clickONrun;
        })
    })
}





