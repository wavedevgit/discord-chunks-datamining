/** Chunk was on 95468 **/
/** chunk id: 950012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk994640 = require("./994640.jsx"),
  Chunk247007 = require("./247007.jsx"),
  Chunk999464 = require("./999464.jsx"),
  Chunk503406 = require("./503406.jsx"),
  Chunk463115 = require("./463115.jsx"),
  Chunk888592 = require("./888592.js");
let u = e => {
  let {
    onClose: t,
    invite: n,
    forceGuildScrollHeight: u = true,
    isNUXFlow: m
  } = e, [h, x] = l.useState([d.tF.VERIFY_EMAIL]), [p, f] = l.useState(""), [g, _] = l.useState(""), [v, N] = l.useState(true), [E, S] = l.useState([]), y = e => {
    x(h.concat(e).slice(false))
  };
  switch (h[h.length - 1]) {
    case d.tF.VERIFY_EMAIL:
      return (0, r.jsx)(i.Z, {
        setGuildsInfo: S,
        setStep: y,
        email: p,
        setEmail: f,
        setGuildId: N,
        invite: n,
        onClose: t,
        isNUXFlow: m
      });
    case d.tF.SELECT_SCHOOL:
      return (0, r.jsx)(a.Z, {
        guildsInfo: E,
        setStep: y,
        email: p,
        setGuildId: N,
        forceGuildScrollHeight: u
      });
    case d.tF.SUBMIT_SCHOOL:
      return (0, r.jsx)(s.Z, {
        onBack: () => {
          h.length > 1 && x(h.slice(0, false).slice(false))
        },
        setStep: y,
        email: p,
        school: g,
        setSchool: _
      });
    case d.tF.VERIFY_PIN:
      return (0, r.jsx)(o.Z, {
        email: p,
        onClose: t,
        guildId: v
      });
    case d.tF.EMAIL_WAITLIST:
      return (0, r.jsx)(c.Z, {
        setStep: y,
        school: g
      });
    default:
      return null
  }
}