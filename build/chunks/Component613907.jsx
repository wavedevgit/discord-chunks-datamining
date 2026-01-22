/** Chunk was on 97492 **/
/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk631576 = require("./631576.js"),
  Chunk679382 = require("./679382.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk143413 = require("./143413.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk455683 = require("./455683.js");
let v = "749054660769218631";

function x(e) {
  var t;
  let {
    channel: n
  } = e, [i, x] = l.useState("");
  l.useEffect(() => {
    (0, u.zk)("847199849233514549", true)
  }, []);
  let E = (0, s.bG)([h.A, p.default], () => !!a()(h.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== p.default.getId() && e.state === y.cmJ.SENT && !(0, A.A)(e))),
    _ = (0, s.bG)([b.default], () => b.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    C = null != (t = m.Ay.useName(_)) ? t : O.intl.string(O.t.y1Wu2f),
    S = (0, s.bG)([d.A], () => d.A.getStickerById(v)),
    I = l.useCallback(async () => {
      if (null == i || "" === i) try {
        await c.A.sendGreetMessage(n.id, v), g.default.track(y.HAw.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        e.ok || 429 !== e.status || x(O.intl.string(O.t.Whhv4w))
      }
    }, [n.id, n.type, i]),
    N = O.intl.formatToPlainString(O.t.m0zYbV, {
      username: C
    }),
    T = null != i && "" !== i ? (0, r.jsx)(o.Text, {
      className: j.z3,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: i
    }) : null;
  return E ? (0, r.jsxs)("div", {
    className: j.ft,
    children: [(0, r.jsxs)(o.DUT, {
      className: null != i && "" !== i ? j.AO : j.Iq,
      "aria-label": O.intl.string(O.t.pJObYI),
      onClick: I,
      children: [(0, r.jsx)(f.A, {
        sticker: S,
        size: 24
      }), (0, r.jsx)(o.Text, {
        className: j.Qq,
        variant: "text-md/medium",
        children: N
      })]
    }), T]
  }) : (0, r.jsxs)("div", {
    className: j.nj,
    children: [(0, r.jsx)(f.A, {
      sticker: S,
      size: 160,
      className: j.Xr
    }), (0, r.jsx)(o.Button, {
      fullWidth: true,
      variant: "primary",
      size: "md",
      onClick: I,
      disabled: !!i,
      text: N
    }), T]
  })
}