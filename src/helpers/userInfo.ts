export const getInfo = async () => {
    const request = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const info = await request.text();
    const parseInfo: any = info.split(/\n/g).reduce((a, c) => {
        let p = c.split(/=/);
        //@ts-ignore
        a[p[0]] = p[1];
        return a;
    }, {});
    try {
        const ipInfoRequest = await fetch(`https://www.travelpayouts.com/whereami?locale=${parseInfo.loc}&ip=${parseInfo.ip}`);
        return await ipInfoRequest.json();
    }
    catch (e) {
        return "N/A";
    }

    // return ipInfo;
};