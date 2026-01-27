/** Chunk was on 86142 **/
/** chunk id: 212640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NY: () => d,
  RZ: () => c
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk835245 = require("./835245.js"),
  Chunk562465 = require("./562465.js"),
  Chunk118356 = require("./118356.js"),
  Chunk652215 = require("./652215.js");
let a = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : window.location.href,
    n = new URL(e, t);
  return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : window.location.href,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : a;
  try {
    let {
      origin: r
    } = new URL(o(e, t));
    return n.map(e => o(e, t)).some(e => {
      let {
        origin: t
      } = new URL(e);
      return r === t
    })
  } catch (e) {
    return new s.Vy("Auth").error("Failed to check external redirect", e), false
  }
}
async function d(e) {
  let t = (0, r.A)();
  try {
    var n;
    let r, s, a = (await i.Bo.post({
        url: l.Rsh.HANDOFF,
        body: {
          key: t
        },
        oldFormErrors: true,
        rejectWithError: true
      })).body.handoff_token,
      o = (n = {
        urlString: e,
        handoffKey: t,
        handoffToken: a
      }, r = new URL(n.urlString), s = "handoff_key=".concat(encodeURIComponent(n.handoffKey), "&handoff_token=").concat(encodeURIComponent(n.handoffToken)), "" !== r.hash ? r.hash += "&".concat(s) : r.hash = "#".concat(s), r.href);
    window.location.href = o
  } catch (t) {
    window.location.href = e
  }
}