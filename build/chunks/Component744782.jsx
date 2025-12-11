/** Chunk was on 61 **/
/** chunk id: 744782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk147373 = require("./147373.js");
let {
  INVITE_OPTIONS_7_DAYS: b,
  INVITE_OPTIONS_UNLIMITED: y
} = Chunk971130.ZP;

function O(e) {
  var t, n, O;
  let {
    onClose: E,
    event: N
  } = e, C = null == N ? true : N.guild_id, P = (0, r.e7)([u.ZP], () => {
    var e;
    return null != C ? null == (e = u.ZP.getDefaultChannel(C)) ? true : e.id : null
  }, [C]), S = (0, r.e7)([d.Z], () => d.Z.getGuild(C), [C]), {
    channel_id: I,
    id: Z
  } = null != N ? N : {}, T = (0, r.e7)([g.Z], () => {
    let e = null != I ? I : P;
    return null == e ? null : g.Z.getInvite(e)
  }, [I, P]);
  if (null == N) return E(), null;
  let w = null != (t = null == S ? true : S.vanityURLCode) ? t : null == T ? true : T.code,
    k = null != w ? (0, a.tV)({
      baseCode: w,
      guildScheduledEventId: Z
    }) : null,
    D = null == k || null == T,
    R = (0, s.Z)(null != k ? k : ""),
    _ = null != (n = null == T ? true : T.maxAge) ? n : b.value,
    A = null != (O = null == T ? true : T.maxUses) ? O : y.value;
  return (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(i.P3F, {
      onClick: E,
      className: j.close,
      "aria-label": p.intl.string(p.t.cpT0Cq),
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
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: j.header,
      children: p.intl.string(p.t.UzNv7u)
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: j.body,
      children: p.intl.string(p.t.UetJjH)
    }), (0, l.jsxs)("div", {
      className: j.invite,
      children: [(0, l.jsx)(o.S, {
        value: R,
        autoFocus: false,
        onCopy: e => {
          if (D) return;
          (0, m.JG)(e);
          let t = (0, v.xC)(N.entity_type);
          x.default.track(f.rMx.COPY_INSTANT_INVITE, {
            server: N.guild_id,
            channel: I,
            channel_type: t,
            location: f.t4x.GUILD_EVENTS,
            code: T.code,
            guild_scheduled_event_id: null == N ? true : N.id
          })
        }
      }), (null == S ? true : S.vanityURLCode) == null && (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: j.inviteDetail,
        children: (0, h.Vg)(_, A)
      })]
    })]
  })
}