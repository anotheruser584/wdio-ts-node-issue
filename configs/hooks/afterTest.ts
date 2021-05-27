import { Frameworks } from "@wdio/types";

export function afterTestHook(test: Frameworks.Test) {
    if (!test.error) {
        browser.takeScreenshot();
    }
}