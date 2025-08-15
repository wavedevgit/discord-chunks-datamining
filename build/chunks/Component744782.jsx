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
  Chunk369702 = require("./369702.js");
let {
  INVITE_OPTIONS_7_DAYS: y,
  INVITE_OPTIONS_UNLIMITED: b
} = Chunk971130.ZP;

function E(e) {
  var t, n, E;
  let {
    onClose: O,
    event: N
  } = e, C = null == N ? true : N.guild_id, T = (0, l.e7)([u.ZP], () => {
    var e;
    return null != C ? null == (e = u.ZP.getDefaultChannel(C)) ? true : e.id : null
  }, [C]), S = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]), {
    channel_id: I,
    id: Z
  } = null != N ? N : {}, P = (0, l.e7)([x.Z], () => {
    let e = null != I ? I : T;
    return null == e ? null : x.Z.getInvite(e)
  }, [I, T]);
  if (null == N) return O(), null;
  let w = null != (t = null == S ? true : S.vanityURLCode) ? t : null == P ? true : P.code,
    D = null != w ? (0, a.tV)({
      baseCode: w,
      guildScheduledEventId: Z
    }) : null,
    _ = null == D || null == P,
    R = (0, s.Z)(null != D ? D : ""),
    A = null != (n = null == P ? true : P.maxAge) ? n : y.value,
    X = null != (E = null == P ? true : P.maxUses) ? E : b.value;
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(i.P3F, {
      onClick: O,
      className: j.close,
      "aria-label": p.intl.string(p.t.cpT0Cg),
      children: (0, r.jsx)(i.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(c.Z, {
      children: (0, r.jsx)("div", {
        className: j.iconContainer,
        children: (0, r.jsx)(i.Que, {
          size: "custom",
          color: "currentColor",
          height: 30,
          width: 30,
          className: j.icon
        })
      })
    }), (0, r.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      className: j.header,
      children: p.intl.string(p.t.UzNv7u)
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: j.body,
      children: p.intl.string(p.t.UetJjI)
    }), (0, r.jsxs)("div", {
      className: j.invite,
      children: [(0, r.jsx)(o.S, {
        value: R,
        autoFocus: false,
        onCopy: e => {
          if (_) return;
          (0, g.JG)(e);
          let t = (0, h.xC)(N.entity_type);
          m.default.track(f.rMx.COPY_INSTANT_INVITE, {
            server: N.guild_id,
            channel: I,
            channel_type: t,
            location: f.t4x.GUILD_EVENTS,
            code: P.code,
            guild_scheduled_event_id: null == N ? true : N.id
          })
        }
      }), (null == S ? true : S.vanityURLCode) == null && (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: j.inviteDetail,
        children: (0, v.Vg)(A, X)
      })]
    })]
  })
}