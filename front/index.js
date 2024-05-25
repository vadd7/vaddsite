const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("trans")!="true" & false) {
    window.location.href = "https://vadd.hu";
}
