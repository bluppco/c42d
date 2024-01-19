export const endpointFetch = ( environment ) => {
    return environment === "staging" ? "https://staging.api.c42d.blupp.co" : "https://staging.api.c42d.blupp.co"
}