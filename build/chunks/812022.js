/** Chunk was on web.js **/
/** chunk id: 812022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js"), require("./693327.js"), require("./554719.js"), require("./747238.js"), require("./333405.js");
var Chunk562465 = require("./562465.js"),
  Chunk618651 = require("./618651.js"),
  Chunk53943 = require("./53943.js"),
  Chunk873044 = require("./873044.js"),
  Chunk232946 = require("./232946.js"),
  Chunk30076 = require("./30076.js"),
  Chunk209489 = require("./209489.js");
require("./723702.js");
var Chunk728458 = require("./728458.js"),
  Chunk998218 = require("./998218.js"),
  Chunk368626 = require("./368626.js"),
  Chunk472229 = require("./472229.js"),
  Chunk230172 = require("./230172.js"),
  Chunk652215 = require("./652215.js");
let m = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
  g = new Chunk368626.n;

function E(e) {
  let t = new URLSearchParams;
  t.append("query", '@http.x_client_trace_id:"'.concat(e, '"')), t.append("showAllSpans", "true");
  let n = d.A.toURLSafe("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
  return null == n ? null : n.toString()
}
let y = /\/api(\/v\d+)?\/science/;

function b(e) {
  let t = 10;
  return e.reduce((e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), t = Math.max(t - 1, 1), e), []).join(",")
}

function O(e) {
  try {
    let t = new URL(e).pathname;
    return y.test(t)
  } catch (t) {
    return y.test(e)
  }
}

function v(e, t) {
  returnfalse
}(0, Chunk562465.IA)({
  prepareRequest(e) {
    let {
      default: t
    } = n(961350), {
      default: o
    } = n(111162), {
      default: s
    } = n(773669), {
      default: l
    } = n(287809), {
      default: c
    } = n(954571), {
      isPlatformEmbedded: d
    } = n(723702);
    if ("/" === e.url[0]) {
      var f, h;
      e.url = (0, r.TP)() + e.url, "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()), (0, i.D)();
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
      let _ = (0, p.A)();
      null != _ && e.set("X-Discord-Timezone", _);
      let m = o.getDebugOptionsHeaderValue();
      if (null != m && "" !== m && e.set("X-Debug-Options", m), o.isTracingRequests) {
        let t = l.getCurrentUser(),
          n = g.generate(null != (h = null == t ? true : t.id) ? h : "0");
        e.set("x-client-trace-id", n);
        try {
          let t = new URL(e.url).pathname;
          if (!O(t)) {
            let r = E(n);
            null !== r && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, r)
          }
        } catch (e) {
          console.error("error while printing tracing log", e)
        }
      }
    }
    let y = e.url,
      A = e.method;
    v(y, A) && (0, _.R)(y, A), a.z8("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", t => {
      let n = null != t && t.status >= 400 ? t.text : null,
        r = null == n ? "" : "and body: ".concat(n);
      a.z8("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? true : t.status, " ").concat(r))
    }), e.on("error", (t, n) => {
      if (a.z8("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? true : t.status, " and body: ").concat(null == n ? true : n.text)), null != t && "parse" in t && t.parse) {
        let n = "[FILTERED]";
        if (m.includes(e.url)) {
          var r, i;
          n = null == (i = e.xhr) || null == (r = i.responseText) ? true : r.slice(0, 1e3)
        }
        u.A.addBreadcrumb({
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
    return 400 === e.statusCode && (null == (i = e.body) ? true : i.captcha_key) ? (Promise.all([n.e("36037").then(n.bind(n, 165508)), Promise.resolve().then(n.bind(n, 577015))]).then(t => {
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
    }).catch(r), true) : 401 === e.statusCode && (null == (a = e.body) ? true : a.code) === h.t02.MFA_REQUIRED && (null == (c = e.body) ? true : c.mfa) ? (Promise.all([n.e("88890"), n.e("66663")]).then(n.bind(n, 522238)).then(n => {
      let {
        openMFAModal: i
      } = n;
      i(e.body.mfa, t, r)
    }).catch(r), true) : ((0, l.O)(e.statusCode, null == (u = e.body) ? true : u.code) ? Promise.resolve().then(n.bind(n, 700241)).then(e => {
      let {
        default: t
      } = e;
      t()
    }) : (0, o.O)(e.statusCode, null == (d = e.body) ? true : d.code) ? n.e("52729").then(n.bind(n, 116960)).then(t => {
      var n;
      let {
        default: r
      } = t;
      r(null == (n = e.body) ? true : n.guild_id)
    }) : (0, s.f)(e) && n.e("75880").then(n.bind(n, 129435)).then(e => {
      let {
        handleBlockedByProxy: t
      } = e;
      t()
    }), false)
  }
}), (0, Chunk562465.Cu)(async e => {
  a.z8("Network", "Request to ".concat(e, " failed, will retry.")), c.A.isOnline() || (await c.A.awaitOnline(), a.z8("Network", "Network detected online, retrying ".concat(e)))
})