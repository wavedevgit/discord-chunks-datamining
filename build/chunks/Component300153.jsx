/** Chunk was on 342 **/
/** chunk id: 300153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21599 = require("./21599.js"),
  Chunk279208 = require("./279208.js"),
  Chunk708051 = require("./708051.jsx"),
  Chunk489673 = require("./489673.jsx"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk958590 = require("./958590.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk735547 = require("./735547.js"),
  Chunk9448 = require("./9448.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk671353 = require("./671353.js");
let {
  INVITE_OPTIONS_7_DAYS: b,
  INVITE_OPTIONS_UNLIMITED: y
} = Chunk735547.Ay;

function O(e) {
  var t, n, O;
  let {
    onClose: A,
    event: E
  } = e, N = null == E ? true : E.guild_id, P = (0, r.bG)([u.Ay], () => {
    var e;
    return null != N ? null == (e = u.Ay.getDefaultChannel(N)) ? true : e.id : null
  }, [N]), C = (0, r.bG)([d.A], () => d.A.getGuild(N), [N]), {
    channel_id: S,
    id: T
  } = null != E ? E : {}, w = (0, r.bG)([x.A], () => {
    let e = null != S ? S : P;
    return null == e ? null : x.A.getInvite(e)
  }, [S, P]);
  if (null == E) return A(), null;
  let I = null != (t = null == C ? true : C.vanityURLCode) ? t : null == w ? true : w.code,
    D = null != I ? (0, s.WU)({
      baseCode: I,
      guildScheduledEventId: T
    }) : null,
    k = null == D || null == w,
    G = (0, a.A)(null != D ? D : ""),
    R = null != (n = null == w ? true : w.maxAge) ? n : b.value,
    _ = null != (O = null == w ? true : w.maxUses) ? O : y.value;
  return (0, l.jsxs)("div", {
    className: p.kL,
    children: [(0, l.jsx)(i.DUT, {
      onClick: A,
      className: p.VN,
      "aria-label": f.intl.string(f.t.cpT0Cq),
      children: (0, l.jsx)(i.PGe, {
        size: "md",
        color: "currentColor"
      })
    }), (0, l.jsx)(c.A, {
      children: (0, l.jsx)("div", {
        className: p.zc,
        children: (0, l.jsx)(i.CTc, {
          size: "custom",
          color: "currentColor",
          height: 30,
          width: 30,
          className: p.Kk
        })
      })
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: p.wx,
      children: f.intl.string(f.t.UzNv7u)
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: p.rf,
      children: f.intl.string(f.t.UetJjH)
    }), (0, l.jsxs)("div", {
      className: p.EZ,
      children: [(0, l.jsx)(o.I, {
        value: G,
        autoFocus: false,
        onCopy: e => {
          if (k) return;
          (0, m.C)(e);
          let t = (0, j.dy)(E.entity_type);
          g.default.track(v.HAw.COPY_INSTANT_INVITE, {
            server: E.guild_id,
            channel: S,
            channel_type: t,
            location: v.PE1.GUILD_EVENTS,
            code: w.code,
            guild_scheduled_event_id: null == E ? true : E.id
          })
        }
      }), (null == C ? true : C.vanityURLCode) == null && (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        className: p.x6,
        children: (0, h.Be)(R, _)
      })]
    })]
  })
}