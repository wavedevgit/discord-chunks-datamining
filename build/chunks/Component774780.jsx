/** Chunk was on 47841 **/
/** chunk id: 774780, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./864466.js"), require("./443073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk555337 = require("./555337.js"),
  Chunk965033 = require("./965033.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk975571 = require("./975571.js"),
  Chunk928348 = require("./928348.js"),
  Chunk53594 = require("./53594.js"),
  Chunk24043 = require("./24043.jsx"),
  Chunk268749 = require("./268749.js"),
  Chunk86933 = require("./86933.jsx"),
  Chunk390715 = require("./390715.jsx"),
  Chunk264349 = require("./264349.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk64638 = require("./64638.js");

function v(e) {
  var t, n;
  let {
    guildId: v,
    setPreventNavigation: A = () => {}
  } = e, {
    editingRule: E,
    setEditingRule: N
  } = (0, b.U)(), {
    guild: _,
    subsection: S
  } = (0, l.cf)([a.A], () => a.A.getProps()), T = null != (t = null != (n = null == _ ? true : _.id) ? n : v) ? t : j.dJq, I = null != E, [C] = (0, u.qv)(T), {
    rulesByTriggerType: P
  } = (0, u.wP)(T), w = {
    [f.yT.MEMBERS]: O.intl.string(O.t.sx4E5v),
    [f.yT.CONTENT]: O.intl.string(O.t.fphZb0)
  }, R = i.useMemo(() => Object.values(null != P ? P : {}).flat().filter(o.Vq), [P]), D = {
    isInEditMode: I,
    setEditingRule: N
  }, G = i.useRef(D);
  i.useEffect(() => {
    G.current = D
  }), i.useEffect(() => {
    let {
      isInEditMode: e,
      setEditingRule: t
    } = G.current;
    e && t(null)
  }, [T]);
  let L = i.useCallback((e, t) => {
      if (null != e) {
        var n, r;
        return null != (n = null == (r = R.find(t => {
          let {
            id: n
          } = t;
          return n === e
        })) ? true : r.name) ? n : null
      }
      return null != t ? f.i$[t].getDefaultRuleName() : null
    }, [R]),
    k = i.useMemo(() => {
      var e, t;
      return L(null != (e = null == E ? true : E.id) ? e : null, null != (t = null == E ? true : E.triggerType) ? t : null)
    }, [L, E]);
  i.useEffect(() => {
    A(I, (0, x.cT)(k))
  }, [A, I, k]);
  let M = (0, f.ws)(T);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: O.intl.string(O.t.uRelgx)
    }), (0, r.jsx)("div", {
      className: y.iQ,
      children: (0, r.jsxs)("div", {
        className: y.h_,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: O.intl.string(O.t.EwuSCR)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          className: y.xR,
          children: O.intl.format(O.t["B+sgGt"], {
            helpUrl: d.A.getArticleURL(j.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      })
    }), C ? (0, r.jsx)(g.A, {}) : Object.entries(M).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let l = null != w[t] ? (0, r.jsx)("div", {
        className: y.Km,
        children: (0, r.jsx)(s.Text, {
          variant: "text-lg/normal",
          color: "text-strong",
          children: w[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: y.Wk,
        children: [l, (0, r.jsx)(r.Fragment, {
          children: n.map(e => {
            var t;
            return (0, r.jsx)(p.A, {
              guildId: T,
              triggerType: e,
              rules: null != (t = P[e]) ? t : [],
              initWithEdit: S === j.nd0.AUTOMOD_MENTION_SPAM && e === h.uh.MENTION_SPAM
            }, e)
          })
        })]
      }, t)
    }), null != _ && (0, r.jsx)(c.t9, {
      guild: _,
      withDivider: false,
      className: y.Vf
    }), (0, r.jsx)(m.A, {
      guildId: T,
      existingRules: R
    }), I && (0, r.jsx)("div", {
      className: y.OL
    })]
  })
}