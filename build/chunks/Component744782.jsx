/** Chunk was on 61 **/
/** chunk id: 744782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk264229 = require("./264229.js"),
  Chunk366980 = require("./366980.js"),
  Chunk603236 = require("./603236.jsx"),
  Chunk939863 = require("./939863.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk341165 = require("./341165.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk971130 = require("./971130.js"),
  Chunk230900 = require("./230900.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk428048 = require("./428048.js");
let {
  INVITE_OPTIONS_7_DAYS: y,
  INVITE_OPTIONS_UNLIMITED: b
} = Chunk971130.ZP;

function E(e) {
  var t, n, E;
  let {
    onClose: N,
    event: O
  } = e, C = null == O ? true : O.guild_id, S = (0, r.e7)([u.ZP], () => {
    var e;
    return null != C ? null == (e = u.ZP.getDefaultChannel(C)) ? true : e.id : null
  }, [C]), T = (0, r.e7)([d.Z], () => d.Z.getGuild(C), [C]), {
    channel_id: Z,
    id: I
  } = null != O ? O : {}, P = (0, r.e7)([x.Z], () => {
    let e = null != Z ? Z : S;
    return null == e ? null : x.Z.getInvite(e)
  }, [Z, S]);
  if (null == O) return N(), null;
  let w = null != (t = null == T ? true : T.vanityURLCode) ? t : null == P ? true : P.code,
    D = null != w ? (0, a.tV)({
      baseCode: w,
      guildScheduledEventId: I
    }) : null,
    A = null == D || null == P,
    R = (0, s.Z)(null != D ? D : ""),
    G = null != (n = null == P ? true : P.maxAge) ? n : y.value,
    L = null != (E = null == P ? true : P.maxUses) ? E : b.value;
  return (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(i.P3F, {
      onClick: N,
      className: j.close,
      "aria-label": f.intl.string(f.t.cpT0Cg),
      children: (0, l.jsx)(i.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), (0, l.jsx)(c.Z, {
      children: (0, l.jsx)("div", {
        className: j.iconContainer,
        children: (0, l.jsx)(i.Que, {
          size: "custom",
          color: "currentColor",
          height: 30,
          width: 30,
          className: j.icon
        })
      })
    }), (0, l.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      className: j.header,
      children: f.intl.string(f.t.UzNv7u)
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: j.body,
      children: f.intl.string(f.t.UetJjI)
    }), (0, l.jsxs)("div", {
      className: j.invite,
      children: [(0, l.jsx)(o.S, {
        value: R,
        autoFocus: false,
        onCopy: e => {
          if (A) return;
          (0, g.JG)(e);
          let t = (0, h.xC)(O.entity_type);
          m.default.track(p.rMx.COPY_INSTANT_INVITE, {
            server: O.guild_id,
            channel: Z,
            channel_type: t,
            location: p.t4x.GUILD_EVENTS,
            code: P.code,
            guild_scheduled_event_id: null == O ? true : O.id
          })
        }
      }), (null == T ? true : T.vanityURLCode) == null && (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: j.inviteDetail,
        children: (0, v.Vg)(G, L)
      })]
    })]
  })
}