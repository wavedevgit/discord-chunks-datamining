/** Chunk was on 39048 **/
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
    setPreventNavigation: y = () => {}
  } = e, {
    editingRule: A,
    setEditingRule: E
  } = (0, p.U)(), {
    guild: N,
    subsection: S
  } = (0, l.cf)([a.A], () => a.A.getProps()), I = null != (t = null != (n = null == N ? true : N.id) ? n : v) ? t : j.dJq, T = null != A, [C] = (0, u.qv)(I), {
    rulesByTriggerType: P
  } = (0, u.wP)(I), w = {
    [g.yT.MEMBERS]: _.intl.string(_.t.sx4E5v),
    [g.yT.CONTENT]: _.intl.string(_.t.fphZb0)
  }, R = i.useMemo(() => Object.values(null != P ? P : {}).flat().filter(c.Vq), [P]), D = {
    isInEditMode: T,
    setEditingRule: E
  }, G = i.useRef(D);
  i.useEffect(() => {
    G.current = D
  }), i.useEffect(() => {
    let {
      isInEditMode: e,
      setEditingRule: t
    } = G.current;
    e && t(null)
  }, [I]);
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
      return null != t ? g.i$[t].getDefaultRuleName() : null
    }, [R]),
    k = i.useMemo(() => {
      var e, t;
      return L(null != (e = null == A ? true : A.id) ? e : null, null != (t = null == A ? true : A.triggerType) ? t : null)
    }, [L, A]);
  i.useEffect(() => {
    y(T, (0, b.cT)(k))
  }, [y, T, k]);
  let M = (0, g.ws)(I);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: _.intl.string(_.t.uRelgx)
    }), (0, r.jsx)("div", {
      className: O.iQ,
      children: (0, r.jsxs)("div", {
        className: O.h_,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: _.intl.string(_.t.EwuSCR)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          className: O.xR,
          children: _.intl.format(_.t["B+sgGt"], {
            helpUrl: d.A.getArticleURL(j.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      })
    }), C ? (0, r.jsx)(m.A, {}) : Object.entries(M).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let l = null != w[t] ? (0, r.jsx)("div", {
        className: O.Km,
        children: (0, r.jsx)(s.Text, {
          variant: "text-lg/normal",
          color: "text-strong",
          children: w[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: O.Wk,
        children: [l, (0, r.jsx)(r.Fragment, {
          children: n.map(e => {
            var t;
            return (0, r.jsx)(h.A, {
              guildId: I,
              triggerType: e,
              rules: null != (t = P[e]) ? t : [],
              initWithEdit: S === j.nd0.AUTOMOD_MENTION_SPAM && e === x.uh.MENTION_SPAM
            }, e)
          })
        })]
      }, t)
    }), null != N && (0, r.jsx)(o.t9, {
      guild: N,
      withDivider: false,
      className: O.Vf
    }), (0, r.jsx)(f.A, {
      guildId: I,
      existingRules: R
    }), T && (0, r.jsx)("div", {
      className: O.OL
    })]
  })
}