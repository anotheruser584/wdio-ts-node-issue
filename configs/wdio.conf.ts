import {afterTestHook} from "./hooks"

export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.ts'
    ],
    capabilities: [{        
        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]], 
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    afterTest: afterTestHook,

    autoCompileOpts: {
        autoCompile: false,
    }
}
