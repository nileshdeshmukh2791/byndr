import { store, actionSaveScrollHeight, actionCantactUs_Ip_Values, actionCantactUs_ApiResponse } from "../Redux";

function SaveScroll_Height(HideHeder, currentScroolHeight) {

    // console.log(" & * & * & * in SaveScroll_Height :  ", reduxstate.WindowScroolheight, currentScroolHeight, currentScroolHeight - reduxstate.WindowScroolheight);

    // let HideHeader;
    // let diff = currentScroolHeight - reduxstate.WindowScroolheight;
    // console.log("check service : ", diff, diff > 50 && !(reduxstate.HideHeader), reduxstate.HideHeader);

    // if (diff > 1 && !reduxstate.HideHeader) {
    //     console.log(" scrool down ")
    //     HideHeader = true
    // } else if (diff < -1 && reduxstate.HideHeader) {
    //     console.log(" scrool up ")
    //     HideHeader = false
    // }

    if (HideHeder !== undefined) {
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeder));
    } else {
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeder));
    }
}

function CantactUs_Ip_Values(field: string, value: string) {

    store.dispatch(actionCantactUs_Ip_Values(field, value));

}

function SubmitContactPage(reqObject: any) {

    let SuccessOrFail = 'success'
    store.dispatch(actionCantactUs_ApiResponse(SuccessOrFail));
}

export { SaveScroll_Height, CantactUs_Ip_Values ,SubmitContactPage }