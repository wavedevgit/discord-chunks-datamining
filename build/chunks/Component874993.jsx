/** Chunk was on 64982 **/
/** chunk id: 874993, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk999382 = require("./999382.js"),
  Chunk450377 = require("./450377.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk426563 = require("./426563.js"),
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

function y(e) {
  var t, n;
  let {
    guildId: y,
    setPreventNavigation: E = () => {}
  } = e, {
    editingRule: N,
    setEditingRule: I
  } = (0, h.V)(), {
    guild: S,
    subsection: T
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), P = null != (n = null != (t = null == S ? true : S.id) ? t : y) ? n : _.lds, w = null != N, [Z] = (0, m.RD)(P), {
    rulesByTriggerType: R
  } = (0, m.pH)(P), D = {
    [p.vh.MEMBERS]: C.intl.string(C.t.sx4E5v),
    [p.vh.CONTENT]: C.intl.string(C.t.fphZb0)
  }, A = i.useMemo(() => Object.values(null != R ? R : {}).flat().filter(d.lm), [R]), L = {
    isInEditMode: w,
    setEditingRule: I
  }, k = i.useRef(L);
  i.useEffect(() => {
    k.current = L
  }), i.useEffect(() => {
    let {
      isInEditMode: e,
      setEditingRule: t
    } = k.current;
    e && t(null)
  }, [P]);
  let G = i.useCallback((e, t) => {
      if (null != e) {
        var n, r;
        return null != (r = null == (n = A.find(t => {
          let {
            id: n
          } = t;
          return n === e
        })) ? true : n.name) ? r : null
      }
      return null != t ? p.I6[t].getDefaultRuleName() : null
    }, [A]),
    M = i.useMemo(() => {
      var e, t;
      return G(null != (e = null == N ? true : N.id) ? e : null, null != (t = null == N ? true : N.triggerType) ? t : null)
    }, [G, N]);
  i.useEffect(() => {
    E(w, (0, j.af)(M))
  }, [E, w, M]);
  let U = (0, p.Z6)(P);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: C.intl.string(C.t.uRelgx)
    }), (0, r.jsxs)("div", {
      className: O.descriptionContainer,
      children: [(0, r.jsxs)("div", {
        className: O.description,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: C.intl.string(C.t.EwuSCR)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          className: O.helpUrl,
          children: C.intl.format(C.t["B+sgGt"], {
            helpUrl: u.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, r.jsxs)("div", {
        className: O.descriptionAvatarContainer,
        children: [(0, r.jsx)(s.qEK, {
          src: (0, g.j)(),
          size: s.EFr.SIZE_80,
          "aria-label": C.intl.string(C.t.hG1StD)
        }), (0, r.jsx)(s.IGR, {
          text: (0, r.jsxs)("div", {
            className: O.automodBadgeText,
            children: [(0, r.jsx)(s.sV5, {
              size: "xxs",
              color: "currentColor",
              className: O.checkmarkIcon
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/bold",
              className: O.automodText,
              children: C.intl.string(C.t.hG1StD)
            })]
          }),
          color: a.Z.unsafe_rawColors.BRAND_500.css,
          className: O.textBadge
        })]
      })]
    }), Z ? (0, r.jsx)(f.Z, {}) : Object.entries(U).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let l = null != D[t] ? (0, r.jsx)("div", {
        className: O.categoryHeader,
        children: (0, r.jsx)(s.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: D[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: O.categoryContainer,
        children: [l, (0, r.jsx)(r.Fragment, {
          children: n.map(e => {
            var t;
            return (0, r.jsx)(x.Z, {
              guildId: P,
              triggerType: e,
              rules: null != (t = R[e]) ? t : [],
              initWithEdit: T === _.KsC.AUTOMOD_MENTION_SPAM && e === v.fX.MENTION_SPAM
            }, e)
          })
        })]
      }, t)
    }), null != S && (0, r.jsx)(c.k0, {
      guild: S,
      withDivider: false,
      className: O.explicitContentFilterSection
    }), (0, r.jsx)(b.Z, {
      guildId: P,
      existingRules: A
    }), w && (0, r.jsx)("div", {
      className: O.endSpacer
    })]
  })
}