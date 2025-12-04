/** Chunk was on 384 **/
/** chunk id: 874993, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk999382 = require("./999382.js"),
  Chunk450377 = require("./450377.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk727072 = require("./727072.js"),
  Chunk85960 = require("./85960.js"),
  Chunk577330 = require("./577330.jsx"),
  Chunk65912 = require("./65912.js"),
  Chunk51248 = require("./51248.jsx"),
  Chunk546513 = require("./546513.jsx"),
  Chunk572456 = require("./572456.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk894780 = require("./894780.js");

function O(e) {
  var t, n;
  let {
    guildId: O,
    setPreventNavigation: C = () => {}
  } = e, {
    editingRule: y,
    setEditingRule: N
  } = (0, p.V)(), {
    guild: E,
    subsection: I
  } = (0, l.cj)([s.Z], () => s.Z.getProps()), S = null != (n = null != (t = null == E ? true : E.id) ? t : O) ? n : j.lds, T = null != y, [P] = (0, u.RD)(S), {
    rulesByTriggerType: w
  } = (0, u.pH)(S), Z = {
    [g.vh.MEMBERS]: _.intl.string(_.t.sx4E5v),
    [g.vh.CONTENT]: _.intl.string(_.t.fphZb0)
  }, R = i.useMemo(() => Object.values(null != w ? w : {}).flat().filter(c.lm), [w]), D = {
    isInEditMode: T,
    setEditingRule: N
  }, A = i.useRef(D);
  i.useEffect(() => {
    A.current = D
  }), i.useEffect(() => {
    let {
      isInEditMode: e,
      setEditingRule: t
    } = A.current;
    e && t(null)
  }, [S]);
  let L = i.useCallback((e, t) => {
      if (null != e) {
        var n, r;
        return null != (r = null == (n = R.find(t => {
          let {
            id: n
          } = t;
          return n === e
        })) ? true : n.name) ? r : null
      }
      return null != t ? g.I6[t].getDefaultRuleName() : null
    }, [R]),
    k = i.useMemo(() => {
      var e, t;
      return L(null != (e = null == y ? true : y.id) ? e : null, null != (t = null == y ? true : y.triggerType) ? t : null)
    }, [L, y]);
  i.useEffect(() => {
    C(T, (0, b.af)(k))
  }, [C, T, k]);
  let G = (0, g.Z6)(S);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: _.intl.string(_.t.uRelgx)
    }), (0, r.jsx)("div", {
      className: v.descriptionContainer,
      children: (0, r.jsxs)("div", {
        className: v.description,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: _.intl.string(_.t.EwuSCR)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          className: v.helpUrl,
          children: _.intl.format(_.t["B+sgGt"], {
            helpUrl: d.Z.getArticleURL(j.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      })
    }), P ? (0, r.jsx)(m.Z, {}) : Object.entries(G).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let l = null != Z[t] ? (0, r.jsx)("div", {
        className: v.categoryHeader,
        children: (0, r.jsx)(a.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: Z[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: v.categoryContainer,
        children: [l, (0, r.jsx)(r.Fragment, {
          children: n.map(e => {
            var t;
            return (0, r.jsx)(h.Z, {
              guildId: S,
              triggerType: e,
              rules: null != (t = w[e]) ? t : [],
              initWithEdit: I === j.KsC.AUTOMOD_MENTION_SPAM && e === x.fX.MENTION_SPAM
            }, e)
          })
        })]
      }, t)
    }), null != E && (0, r.jsx)(o.k0, {
      guild: E,
      withDivider: false,
      className: v.explicitContentFilterSection
    }), (0, r.jsx)(f.Z, {
      guildId: S,
      existingRules: R
    }), T && (0, r.jsx)("div", {
      className: v.endSpacer
    })]
  })
}