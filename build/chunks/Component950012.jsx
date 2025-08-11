/** Chunk was on 95468 **/
/** chunk id: 950012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, [h, f] = l.useState([d.tF.VERIFY_EMAIL]), [x, p] = l.useState(""), [g, _] = l.useState(""), [v, N] = l.useState(true), [E, S] = l.useState([]), y = e => {
    f(h.concat(e).slice(false))
  };
  switch (h[h.length - 1]) {
    case d.tF.VERIFY_EMAIL:
      return (0, r.jsx)(i.Z, {
        setGuildsInfo: S,
        setStep: y,
        email: x,
        setEmail: p,
        setGuildId: N,
        invite: n,
        onClose: t,
        isNUXFlow: m
      });
    case d.tF.SELECT_SCHOOL:
      return (0, r.jsx)(a.Z, {
        guildsInfo: E,
        setStep: y,
        email: x,
        setGuildId: N,
        forceGuildScrollHeight: u
      });
    case d.tF.SUBMIT_SCHOOL:
      return (0, r.jsx)(s.Z, {
        onBack: () => {
          h.length > 1 && f(h.slice(0, false).slice(false))
        },
        setStep: y,
        email: x,
        school: g,
        setSchool: _
      });
    case d.tF.VERIFY_PIN:
      return (0, r.jsx)(o.Z, {
        email: x,
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