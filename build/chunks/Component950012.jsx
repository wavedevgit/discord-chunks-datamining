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
  } = e, [f, p] = l.useState([d.tF.VERIFY_EMAIL]), [h, g] = l.useState(""), [v, _] = l.useState(""), [x, N] = l.useState(true), [E, y] = l.useState([]), S = e => {
    p(f.concat(e).slice(false))
  };
  switch (f[f.length - 1]) {
    case d.tF.VERIFY_EMAIL:
      return (0, r.jsx)(i.Z, {
        setGuildsInfo: y,
        setStep: S,
        email: h,
        setEmail: g,
        setGuildId: N,
        invite: n,
        onClose: t,
        isNUXFlow: m
      });
    case d.tF.SELECT_SCHOOL:
      return (0, r.jsx)(a.Z, {
        guildsInfo: E,
        setStep: S,
        email: h,
        setGuildId: N,
        forceGuildScrollHeight: u
      });
    case d.tF.SUBMIT_SCHOOL:
      return (0, r.jsx)(s.Z, {
        onBack: () => {
          f.length > 1 && p(f.slice(0, false).slice(false))
        },
        setStep: S,
        email: h,
        school: v,
        setSchool: _
      });
    case d.tF.VERIFY_PIN:
      return (0, r.jsx)(o.Z, {
        email: h,
        onClose: t,
        guildId: x
      });
    case d.tF.EMAIL_WAITLIST:
      return (0, r.jsx)(c.Z, {
        setStep: S,
        school: v
      });
    default:
      return null
  }
}