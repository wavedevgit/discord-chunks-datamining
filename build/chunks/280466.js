/** Chunk was on 27978 **/
/** chunk id: 280466, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Eu: () => c,
  Pq: () => u
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk579092 = require("./579092.js"),
  Chunk981631 = require("./981631.js");
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
    return new s.Yd("Auth").error("Failed to check external redirect", e), false
  }
}
async function u(e) {
  let t = (0, r.Z)();
  try {
    let n = (await i.tn.post({
        url: l.ANM.HANDOFF,
        body: {
          key: t
        },
        oldFormErrors: true,
        rejectWithError: true
      })).body.handoff_token,
      r = function(e) {
        let t = new URL(e.urlString),
          n = "handoff_key=".concat(encodeURIComponent(e.handoffKey), "&handoff_token=").concat(encodeURIComponent(e.handoffToken));
        return "" !== t.hash ? t.hash += "&".concat(n) : t.hash = "#".concat(n), t.href
      }({
        urlString: e,
        handoffKey: t,
        handoffToken: n
      });
    window.location.href = r
  } catch (t) {
    window.location.href = e
  }
}