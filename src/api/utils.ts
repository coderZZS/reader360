export const REQUEST_PREFIX = 'http://192.168.2.105:8088'

export function getBaseUrl(url: string, baseurl = REQUEST_PREFIX): string {
    return baseurl + url
}
