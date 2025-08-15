/** Chunk was on 46786 **/
/** chunk id: 388131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  default: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk881052 = require("./881052.js"),
  Chunk911969 = require("./911969.js"),
  Chunk185413 = require("./185413.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk146085 = require("./146085.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk878713 = require("./878713.js");

function b(e, t) {
  return {
    id: e,
    type: t,
    deny: g.Hn,
    allow: p.yP
  }
}

function f(e) {
  let {
    transitionState: t,
    onClose: n,
    channelId: g
  } = e, f = (0, i.e7)([h.Z], () => h.Z.getChannel(g)), w = (0, i.e7)([x.Z], () => x.Z.getGuild(null == f ? true : f.getGuildId())), [C, _] = l.useState({}), [k, v] = l.useState(false), [E, j] = l.useState(null);
  if (null == f || null == w) return null;
  let M = async () => {
    v(true);
    try {
      await
      function(e, t) {
        let n = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === m.aC.ROLE ? b(t.id, u.BN.ROLE) : b(t.id, u.BN.MEMBER)
        });
        return (0, d.hw)(e.id, n, true)
      }(f, C), n()
    } catch (t) {
      let e = new o.Hx(t);
      v(false), j(e)
    }
  };
  return (0, r.jsxs)(a.Modal, {
    transitionState: t,
    title: y.intl.string(y.t.dMJ3Y2),
    onClose: n,
    actions: [{
      variant: "secondary",
      text: y.intl.string(y.t["ETE/oK"]),
      onClick: n
    }, {
      variant: "primary",
      text: y.intl.string(y.t.OYkgVl),
      onClick: M,
      loading: k
    }],
    children: [(0, r.jsxs)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: S.headerSubtitle,
      children: [(0, r.jsx)(s.ewx, {
        size: "xs",
        color: "currentColor",
        className: S.headerSubtitleIcon
      }), f.name]
    }), (0, r.jsx)(c.U, {
      guild: w,
      channel: f,
      permission: p.yP,
      pendingAdditions: C,
      setPendingAdditions: _
    }), null != E ? (0, r.jsx)(s.Text, {
      className: S.error,
      variant: "text-xs/normal",
      color: "text-danger",
      children: E.getAnyErrorMessage()
    }) : null]
  })
}