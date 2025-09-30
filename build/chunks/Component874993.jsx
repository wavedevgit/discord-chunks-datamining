/** Chunk was on 64982 **/
/** chunk id: 874993, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
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

function C(e) {
  var t, n;
  let {
    guildId: C,
    setPreventNavigation: N = () => {}
  } = e, {
    editingRule: E,
    setEditingRule: I
  } = (0, h.V)(), {
    guild: S,
    subsection: T
  } = (0, l.cj)([o.Z], () => o.Z.getProps()), P = null != (n = null != (t = null == S ? true : S.id) ? t : C) ? n : _.lds, w = null != E, [R] = (0, g.RD)(P), {
    rulesByTriggerType: D
  } = (0, g.pH)(P), Z = {
    [p.vh.MEMBERS]: O.intl.string(O.t.sx4E5u),
    [p.vh.CONTENT]: O.intl.string(O.t.fphZb2)
  }, A = i.useMemo(() => Object.values(null != D ? D : {}).flat().filter(d.lm), [D]), L = {
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
      return G(null != (e = null == E ? true : E.id) ? e : null, null != (t = null == E ? true : E.triggerType) ? t : null)
    }, [G, E]);
  i.useEffect(() => {
    N(w, (0, j.af)(M))
  }, [N, w, M]);
  let U = (0, p.Z6)(P);
  return (0, r.jsxs)(a.hjN, {
    title: O.intl.string(O.t.uRelg4),
    tag: "h1",
    children: [(0, r.jsxs)("div", {
      className: y.descriptionContainer,
      children: [(0, r.jsxs)(a.hjN, {
        tag: "h3",
        className: y.description,
        titleClassName: y.descriptionHeader,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: O.intl.string(O.t.EwuSCQ)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          className: y.helpUrl,
          children: O.intl.format(O.t["B+sgGh"], {
            helpUrl: u.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, r.jsxs)("div", {
        className: y.descriptionAvatarContainer,
        children: [(0, r.jsx)(a.qEK, {
          src: (0, m.j)(),
          size: a.EFr.SIZE_80,
          "aria-label": O.intl.string(O.t.hG1StL)
        }), (0, r.jsx)(a.IGR, {
          text: (0, r.jsxs)("div", {
            className: y.automodBadgeText,
            children: [(0, r.jsx)(a.sV5, {
              size: "xxs",
              color: "currentColor",
              className: y.checkmarkIcon
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/bold",
              className: y.automodText,
              children: O.intl.string(O.t.hG1StL)
            })]
          }),
          color: s.Z.unsafe_rawColors.BRAND_500.css,
          className: y.textBadge
        })]
      })]
    }), R ? (0, r.jsx)(f.Z, {}) : Object.entries(U).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let l = null != Z[t] ? (0, r.jsx)(a.hjN, {
        tag: "h3",
        className: y.categoryHeader,
        children: (0, r.jsx)(a.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: Z[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: y.categoryContainer,
        children: [l, (0, r.jsx)(r.Fragment, {
          children: n.map(e => {
            var t;
            return (0, r.jsx)(b.Z, {
              guildId: P,
              triggerType: e,
              rules: null != (t = D[e]) ? t : [],
              initWithEdit: T === _.KsC.AUTOMOD_MENTION_SPAM && e === v.fX.MENTION_SPAM
            }, e)
          })
        })]
      }, t)
    }), null != S && (0, r.jsx)(c.k0, {
      guild: S,
      withDivider: false,
      className: y.explicitContentFilterSection
    }), (0, r.jsx)(x.Z, {
      guildId: P,
      existingRules: A
    }), w && (0, r.jsx)("div", {
      className: y.endSpacer
    })]
  })
}