/** Chunk was on web.js **/
"use strict";
n(610138), n(216116), n(78328), n(815648), n(47120), n(653041), n(315314), n(309749), n(301563), n(203651);
var r = n(544891),
  i = n(569611),
  o = n(547010),
  a = n(580189),
  s = n(397550),
  l = n(931619);
n(358085);
var c = n(960048),
  u = n(591759),
  d = n(303850),
  f = n(105713),
  p = n(981631);
let _ = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
  h = new d.R;

function m(e) {
  let t = new URLSearchParams;
  t.append("query", '@http.x_client_trace_id:"'.concat(e, '"')), t.append("showAllSpans", "true");
  let n = u.Z.toURLSafe("traces?".concat(t.toString()), "https://datadog.discord.tools/apm/");
  return null == n ? null : n.toString()
}
let g = /\/api(\/v\d+)?\/science/;

function E(e) {
  let t = 10;
  return e.reduce((e, n) => (10 === t ? e.push(n) : e.push("".concat(n, ";q=0.").concat(t)), t = Math.max(t - 1, 1), e), []).join(",")
}(0, r.lg)({
  prepareRequest(e) {
    let {
      default: t
    } = n(314897), {
      default: o
    } = n(857192), {
      default: a
    } = n(706454), {
      default: s
    } = n(594174), {
      default: l
    } = n(626135), {
      isPlatformEmbedded: u
    } = n(358085);
    if ("/" === e.url[0]) {
      var d, p;
      e.url = (0, r.K0)() + e.url, "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken());
      let n = l.getSuperPropertiesBase64();
      null != n && e.set("X-Super-Properties", n);
      let i = t.getFingerprint();
      if (null != i && "" !== i && e.set("X-Fingerprint", i), u) {
        let t = [];
        null != navigator && (t = d = [...navigator.languages]);
        let n = E(t);
        e.set("Accept-Language", n)
      }
      e.set("X-Discord-Locale", a.locale);
      let c = (0, f.Z)();
      null != c && e.set("X-Discord-Timezone", c);
      let _ = o.getDebugOptionsHeaderValue();
      if (null != _ && "" !== _ && e.set("X-Debug-Options", _), o.isTracingRequests) {
        let t = s.getCurrentUser(),
          n = h.generate(null !== (p = null == t ? void 0 : t.id) && void 0 !== p ? p : "0");
        e.set("x-client-trace-id", n);
        try {
          let t = new URL(e.url).pathname;
          if (!g.test(t)) {
            let r = m(n);
            null !== r && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, r)
          }
        } catch (e) {
          console.error("error while printing tracing log", e)
        }
      }
    }
    i.Hj("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", t => {
      let n = null != t && t.status >= 400 ? t.text : null,
        r = null == n ? "" : "and body: ".concat(n);
      i.Hj("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? void 0 : t.status, " ").concat(r))
    }), e.on("error", (t, n) => {
      if (i.Hj("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? void 0 : t.status, " and body: ").concat(null == n ? void 0 : n.text)), null != t && "parse" in t && t.parse) {
        let n = "[FILTERED]";
        if (_.includes(e.url)) {
          var r, o;
          n = null === (o = e.xhr) || void 0 === o ? void 0 : null === (r = o.responseText) || void 0 === r ? void 0 : r.slice(0, 1e3)
        }
        c.Z.addBreadcrumb({
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
    var i, l, c, u, d;
    return 400 === e.statusCode && (null === (i = e.body) || void 0 === i ? void 0 : i.captcha_key) ? (Promise.all([n.e("36514").then(n.bind(n, 475271)), n.e("31177").then(n.bind(n, 353250))]).then(t => {
      let [{
        default: n
      }, {
        extractCaptchaPropsFromResponse: r
      }] = t;
      return n.showCaptchaAsync(r(e.body))
    }).then(e => {
      let {
        captcha_key: n,
        captcha_rqtoken: r
      } = e, i = {
        "X-Captcha-Key": n
      };
      null != r && (i["X-Captcha-Rqtoken"] = r), t(i)
    }).catch(r), !0) : 401 === e.statusCode && (null === (l = e.body) || void 0 === l ? void 0 : l.code) === p.evJ.MFA_REQUIRED && (null === (c = e.body) || void 0 === c ? void 0 : c.mfa) ? (Promise.all([n.e("52030"), n.e("6604")]).then(n.bind(n, 24031)).then(n => {
      let {
        openMFAModal: i
      } = n;
      i(e.body.mfa, t, r)
    }).catch(r), !0) : ((0, s.b)(e.statusCode, null === (u = e.body) || void 0 === u ? void 0 : u.code) ? Promise.resolve().then(n.bind(n, 895886)).then(e => {
      let {
        default: t
      } = e;
      t()
    }) : (0, o.b)(e.statusCode, null === (d = e.body) || void 0 === d ? void 0 : d.code) ? n.e("76731").then(n.bind(n, 626892)).then(t => {
      var n;
      let {
        default: r
      } = t;
      r(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id)
    }) : (0, a.X)(e) && n.e("89715").then(n.bind(n, 707708)).then(e => {
      let {
        handleBlockedByProxy: t
      } = e;
      t()
    }), !1)
  }
}), (0, r.Jt)(async e => {
  i.Hj("Network", "Request to ".concat(e, " failed, will retry.")), !l.Z.isOnline() && (await l.Z.awaitOnline(), i.Hj("Network", "Network detected online, retrying ".concat(e)))
})