/** Chunk was on 29679 **/
/** chunk id: 464610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk767587 = require("./767587.js");

function h(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    page: a
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
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: n
        })]
      })]
    }), (0, r.jsx)(l.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => (0, d.K)(a),
      text: p.intl.string(p.t.bt75uw)
    })]
  })
}

function b(e) {
  let {
    guild: t
  } = e;
  (0, a.RD)(t.id);
  let d = (0, s.Z6)(t.id),
    {
      rulesByTriggerType: b
    } = (0, a.pH)(t.id),
    {
      numEnabledRules: x,
      numRules: j
    } = i.useMemo(() => {
      let e = 0,
        t = 0;
      return null == b || Object.values(d).flat().forEach(n => {
        var r;
        let i = null == (r = b[n]) ? true : r.filter(c.lm);
        if (null == i || 0 === i.length) return void t++;
        i.forEach(n => {
          n.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [d, b]),
    _ = (0, m.Q)(t),
    v = _[u.u.CAPTCHA_AND_RAID_PROTECTION],
    O = _[u.u.DM_AND_SPAM_PROTECTION],
    C = _[u.u.PERMISSIONS],
    y = (0, o.pr)(t.id);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: f.header,
      children: p.intl.string(p.t["0A+VSA"])
    }), (0, r.jsx)(g.z, {
      guild: t
    }), (0, r.jsxs)("div", {
      className: f.safetyChecklist,
      children: [(0, r.jsx)(h, {
        icon: n(14215),
        title: p.intl.string(p.t["53eF5o"]),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: v.filter(e => e.enabled).length,
          total: v.length
        }),
        page: u.u.CAPTCHA_AND_RAID_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), (0, r.jsx)(h, {
        icon: n(128724),
        title: p.intl.string(p.t.O0SfFy),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: O.filter(e => e.enabled).length,
          total: O.length
        }),
        page: u.u.DM_AND_SPAM_PROTECTION
      }), (0, r.jsx)("div", {
        className: f.divider
      }), y && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h, {
          icon: n(145136),
          title: p.intl.string(p.t.uRelgx),
          subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
            enabled: x,
            total: j
          }),
          page: u.u.AUTOMOD
        }), (0, r.jsx)("div", {
          className: f.divider
        })]
      }), (0, r.jsx)(h, {
        icon: n(913414),
        title: p.intl.string(p.t.xrmhRX),
        subtitle: p.intl.formatToPlainString(p.t.TG7NYK, {
          enabled: C.filter(e => e.enabled).length,
          total: C.length
        }),
        page: u.u.PERMISSIONS
      })]
    })]
  })
}