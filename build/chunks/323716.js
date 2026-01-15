/** Chunk was on web.js **/
/** chunk id: 323716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./35282.js"), require("./203651.js");
var Chunk544891 = require("./544891.js"),
  Chunk857613 = require("./857613.js"),
  Chunk569611 = require("./569611.js"),
  Chunk547010 = require("./547010.js"),
  Chunk580189 = require("./580189.js"),
  Chunk397550 = require("./397550.js"),
  Chunk931619 = require("./931619.js");
require("./358085.js");
var Chunk960048 = require("./960048.js"),
  Chunk591759 = require("./591759.js"),
  Chunk303850 = require("./303850.js"),
  Chunk105713 = require("./105713.js"),
  Chunk981631 = require("./981631.js");
let h = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
  m = new Chunk303850.R;

function g(e) {
  let t = new URLSearchParams;
  t.append("query", '@http.x_client_trace_id:"'.concat(e, '"')), t.append("showAllSpans", "true");
  let n = d.Z.toURLSafe("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
  return null == n ? null : n.toString()
}
let E = /\/api(\/v\d+)?\/science/;

function b(e) {
  let t = 10;
  return e.reduce((e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), t = Math.max(t - 1, 1), e), []).join(",")
}(0, Chunk544891.lg)({
  prepareRequest(e) {
    let {
      default: t
    } = n(314897), {
      default: o
    } = n(857192), {
      default: s
    } = n(706454), {
      default: l
    } = n(594174), {
      default: c
    } = n(626135), {
      isPlatformEmbedded: d
    } = n(358085);
    if ("/" === e.url[0]) {
      var f, _;
      e.url = (0, r.K0)() + e.url, "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()), (0, i.c)();
      let n = c.getSuperPropertiesBase64();
      null != n && e.set("X-Super-Properties", n);
      let a = t.getFingerprint();
      null != a && "" !== a && e.set("X-Fingerprint", a);
      let u = t.getInstallationForTracking();
      if (null != u && "" !== u && e.set("X-Installation-ID", u), d) {
        let t = [];
        null != navigator && (t = (f = [...navigator.languages], f));
        let n = b(t);
        e.set("Accept-Language", n)
      }
      e.set("X-Discord-Locale", s.locale);
      let h = (0, p.Z)();
      null != h && e.set("X-Discord-Timezone", h);
      let y = o.getDebugOptionsHeaderValue();
      if (null != y && "" !== y && e.set("X-Debug-Options", y), o.isTracingRequests) {
        let t = l.getCurrentUser(),
          n = m.generate(null != (_ = null == t ? true : t.id) ? _ : "0");
        e.set("x-client-trace-id", n);
        try {
          let t = new URL(e.url).pathname;
          if (!E.test(t)) {
            let r = g(n);
            null !== r && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, r)
          }
        } catch (e) {
          console.error("error while printing tracing log", e)
        }
      }
    }
    a.Hj("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", t => {
      let n = null != t && t.status >= 400 ? t.text : null,
        r = null == n ? "" : "and body: ".concat(n);
      a.Hj("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? true : t.status, " ").concat(r))
    }), e.on("error", (t, n) => {
      if (a.Hj("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? true : t.status, " and body: ").concat(null == n ? true : n.text)), null != t && "parse" in t && t.parse) {
        let n = "[FILTERED]";
        if (h.includes(e.url)) {
          var r, i;
          n = null == (i = e.xhr) || null == (r = i.responseText) ? true : r.slice(0, 1e3)
        }
        u.Z.addBreadcrumb({
          category: "superagent",
          message: "Failed to parse HTTP response.",
          data: {
            method: e.method,
            url: e.url,
            responseText: n,
            status: t.status
          }
        })
      }
    })
  },
  interceptResponse(e, t, r) {
    var i, a, c, u, d;
    return 400 === e.statusCode && (null == (i = e.body) ? true : i.captcha_key) ? (Promise.all([n.e("36514").then(n.bind(n, 475271)), Promise.resolve().then(n.bind(n, 353250))]).then(t => {
      let [{
        default: n
      }, {
        extractCaptchaPropsFromResponse: r
      }] = t;
      return n.showCaptchaAsync(r(e.body))
    }).then(e => {
      let {
        captcha_key: n,
        captcha_rqtoken: r,
        captcha_session_id: i
      } = e, a = {
        "X-Captcha-Key": n
      };
      null != r && (a["X-Captcha-Rqtoken"] = r), null != i && (a["X-Captcha-Session-Id"] = i), t(a)
    }).catch(r), true) : 401 === e.statusCode && (null == (a = e.body) ? true : a.code) === _.evJ.MFA_REQUIRED && (null == (c = e.body) ? true : c.mfa) ? (Promise.all([n.e("52030"), n.e("36002")]).then(n.bind(n, 24031)).then(n => {
      let {
        openMFAModal: i
      } = n;
      i(e.body.mfa, t, r)
    }).catch(r), true) : ((0, l.b)(e.statusCode, null == (u = e.body) ? true : u.code) ? Promise.resolve().then(n.bind(n, 895886)).then(e => {
      let {
        default: t
      } = e;
      t()
    }) : (0, o.b)(e.statusCode, null == (d = e.body) ? true : d.code) ? n.e("76731").then(n.bind(n, 626892)).then(t => {
      var n;
      let {
        default: r
      } = t;
      r(null == (n = e.body) ? true : n.guild_id)
    }) : (0, s.X)(e) && n.e("89715").then(n.bind(n, 707708)).then(e => {
      let {
        handleBlockedByProxy: t
      } = e;
      t()
    }), false)
  }
}), (0, Chunk544891.Jt)(async e => {
  a.Hj("Network", "Request to ".concat(e, " failed, will retry.")), c.Z.isOnline() || (await c.Z.awaitOnline(), a.Hj("Network", "Network detected online, retrying ".concat(e)))
})