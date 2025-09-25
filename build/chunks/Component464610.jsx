/** Chunk was on 64523 **/
/** chunk id: 464610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727072 = require("./727072.js"),
  Chunk85960 = require("./85960.js"),
  Chunk676317 = require("./676317.js"),
  Chunk823379 = require("./823379.js"),
  Chunk84613 = require("./84613.js"),
  Chunk740903 = require("./740903.js"),
  Chunk723136 = require("./723136.jsx"),
  Chunk598622 = require("./598622.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687726 = require("./687726.js");

function h(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    page: s
  } = e;
  return (0, r.jsxs)("div", {
    className: f.safetyStepRow,
    children: [(0, r.jsxs)("div", {
      className: f.safetyStepContent,
      children: [(0, r.jsx)(l.qEK, {
        src: i,
        size: l.EFr.SIZE_40,
        "aria-label": t
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: n
        })]
      })]
    }), (0, r.jsx)(l.zxk, {
      size: "sm",
      variant: "secondary",
      onClick: () => (0, d.K)(s),
      text: p.intl.string(p.t.bt75u7)
    })]
  })
}

function x(e) {
  let {
    guild: t
  } = e;
  (0, s.RD)(t.id);
  let d = (0, a.Z6)(t.id),
    {
      rulesByTriggerType: x
    } = (0, s.pH)(t.id),
    {
      numEnabledRules: b,
      numRules: j
    } = i.useMemo(() => {
      let e = 0,
        t = 0;
      return null == x || Object.values(d).flat().forEach(n => {
        var r;
        let i = null == (r = x[n]) ? true : r.filter(c.lm);
        if (null == i || 0 === i.length) return void t++;
        i.forEach(n => {
          n.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [d, x]),
    v = (0, g.Q)(t),
    _ = v[u.u.CAPTCHA_AND_RAID_PROTECTION],
    O = v[u.u.DM_AND_SPAM_PROTECTION],
    y = v[u.u.PERMISSIONS],
    C = (0, o.pr)(t.id);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: f.header,
      children: p.intl.string(p.t["0A+VSE"])
    }), (0, r.jsx)(m.z, {
      guild: t
    }), (0, r.jsxs)("div", {
      className: f.safetyChecklist,
      children: [(0, r.jsx)(h, {
        icon: n(14215),
        title: p.intl.string(p.t["53eF5u"]),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: _.filter(e => e.enabled).length,
          total: _.length
        }),
        page: u.u.CAPTCHA_AND_RAID_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), (0, r.jsx)(h, {
        icon: n(128724),
        title: p.intl.string(p.t.O0SfFx),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: O.filter(e => e.enabled).length,
          total: O.length
        }),
        page: u.u.DM_AND_SPAM_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), C && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h, {
          icon: n(145136),
          title: p.intl.string(p.t.uRelg4),
          subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
            enabled: b,
            total: j
          }),
          page: u.u.AUTOMOD
        }), (0, r.jsx)("div", {
          className: f.divider
        })]
      }), (0, r.jsx)(h, {
        icon: n(913414),
        title: p.intl.string(p.t.xrmhRU),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: y.filter(e => e.enabled).length,
          total: y.length
        }),
        page: u.u.PERMISSIONS
      })]
    })]
  })
}