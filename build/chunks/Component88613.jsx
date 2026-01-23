/** Chunk was on 47841 **/
/** chunk id: 88613, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928348 = require("./928348.js"),
  Chunk53594 = require("./53594.js"),
  Chunk979816 = require("./979816.js"),
  Chunk403362 = require("./403362.js"),
  Chunk203498 = require("./203498.js"),
  Chunk660496 = require("./660496.js"),
  Chunk512122 = require("./512122.jsx"),
  Chunk5558 = require("./5558.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk840701 = require("./840701.js");

function b(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    page: s
  } = e;
  return (0, r.jsxs)("div", {
    className: f.Pu,
    children: [(0, r.jsxs)("div", {
      className: f.mh,
      children: [(0, r.jsx)(l.euF, {
        src: i,
        size: l._3J.SIZE_40,
        "aria-label": t
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: n
        })]
      })]
    }), (0, r.jsx)(l.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => (0, d.K)(s),
      text: p.intl.string(p.t.bt75uw)
    })]
  })
}

function h(e) {
  let {
    guild: t
  } = e;
  (0, s.qv)(t.id);
  let d = (0, a.ws)(t.id),
    {
      rulesByTriggerType: h
    } = (0, s.wP)(t.id),
    {
      numEnabledRules: x,
      numRules: j
    } = i.useMemo(() => {
      let e = 0,
        t = 0;
      return null == h || Object.values(d).flat().forEach(n => {
        var r;
        let i = null == (r = h[n]) ? true : r.filter(c.Vq);
        null == i || 0 === i.length ? t++ : i.forEach(n => {
          n.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [d, h]),
    _ = (0, m.N)(t),
    O = _[u.C.CAPTCHA_AND_RAID_PROTECTION],
    v = _[u.C.DM_AND_SPAM_PROTECTION],
    y = _[u.C.PERMISSIONS],
    A = (0, o.iI)(t.id);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      className: f.wx,
      children: p.intl.string(p.t["0A+VSA"])
    }), (0, r.jsx)(g.p, {
      guild: t
    }), (0, r.jsxs)("div", {
      className: f.Xf,
      children: [(0, r.jsx)(b, {
        icon: n(818774),
        title: p.intl.string(p.t["53eF5o"]),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: O.filter(e => e.enabled).length,
          total: O.length
        }),
        page: u.C.CAPTCHA_AND_RAID_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.yF
      }), (0, r.jsx)(b, {
        icon: n(134635),
        title: p.intl.string(p.t.O0SfFy),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: v.filter(e => e.enabled).length,
          total: v.length
        }),
        page: u.C.DM_AND_SPAM_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.yF
      }), A && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b, {
          icon: n(34853),
          title: p.intl.string(p.t.uRelgx),
          subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
            enabled: x,
            total: j
          }),
          page: u.C.AUTOMOD
        }), (0, r.jsx)("div", {
          className: f.yF
        })]
      }), (0, r.jsx)(b, {
        icon: n(638154),
        title: p.intl.string(p.t.xrmhRX),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: y.filter(e => e.enabled).length,
          total: y.length
        }),
        page: u.C.PERMISSIONS
      })]
    })]
  })
}