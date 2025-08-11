/** Chunk was on 58023 **/
/** chunk id: 744782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk407865 = require("./407865.js");
let {
  INVITE_OPTIONS_7_DAYS: b,
  INVITE_OPTIONS_UNLIMITED: y
} = Chunk971130.ZP;

function O(e) {
  var t, n, O;
  let {
    onClose: E,
    event: N
  } = e, C = null == N ? true : N.guild_id, I = (0, l.e7)([u.ZP], () => {
    var e;
    return null != C ? null == (e = u.ZP.getDefaultChannel(C)) ? true : e.id : null
  }, [C]), S = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]), {
    channel_id: T,
    id: P
  } = null != N ? N : {}, w = (0, l.e7)([m.Z], () => {
    let e = null != T ? T : I;
    return null == e ? null : m.Z.getInvite(e)
  }, [T, I]);
  if (null == N) return E(), null;
  let Z = null != (t = null == S ? true : S.vanityURLCode) ? t : null == w ? true : w.code,
    D = null != Z ? (0, a.tV)({
      baseCode: Z,
      guildScheduledEventId: P
    }) : null,
    _ = null == D || null == w,
    R = (0, s.Z)(null != D ? D : ""),
    k = null != (n = null == w ? true : w.maxAge) ? n : b.value,
    A = null != (O = null == w ? true : w.maxUses) ? O : y.value;
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(i.P3F, {
      onClick: E,
      className: j.close,
      "aria-label": f.intl.string(f.t.cpT0Cg),
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
      children: f.intl.string(f.t.UzNv7u)
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: j.body,
      children: f.intl.string(f.t.UetJjI)
    }), (0, r.jsxs)("div", {
      className: j.invite,
      children: [(0, r.jsx)(o.S, {
        value: R,
        autoFocus: false,
        onCopy: e => {
          if (_) return;
          (0, g.JG)(e);
          let t = (0, v.xC)(N.entity_type);
          x.default.track(p.rMx.COPY_INSTANT_INVITE, {
            server: N.guild_id,
            channel: T,
            channel_type: t,
            location: p.t4x.GUILD_EVENTS,
            code: w.code,
            guild_scheduled_event_id: null == N ? true : N.id
          })
        }
      }), (null == S ? true : S.vanityURLCode) == null && (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: j.inviteDetail,
        children: (0, h.Vg)(k, A)
      })]
    })]
  })
}