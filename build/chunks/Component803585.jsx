/** Chunk was on 52081 **/
/** chunk id: 803585, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk198982 = require("./198982.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk4274 = require("./4274.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk516073 = require("./516073.js"),
  Chunk906471 = require("./906471.js"),
  Chunk168482 = require("./168482.js");
let b = "hTKzmak",
  T = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk652215.BVt.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/")),
  O = [b, "".concat(T).concat(b), "".concat(T).concat("wumpus-friends")],
  E = e => {
    let {
      onClick: t
    } = e;
    return (0, l.jsxs)(s.DUT, {
      className: S.qd,
      onClick: () => {
        t(), (0, _.pX)(f.BVt.GUILD_DISCOVERY)
      },
      children: [(0, l.jsx)("img", {
        width: 40,
        height: 40,
        className: S.aL,
        alt: "",
        src: I
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(s.Heading, {
          className: S.qg,
          variant: "heading-md/semibold",
          children: m.intl.string(m.t.DwDxDU)
        }), (0, l.jsx)(s.Text, {
          className: S.qg,
          variant: "text-xs/normal",
          children: m.intl.string(m.t["5RL4CD"])
        })]
      }), (0, l.jsx)("img", {
        className: S.y8,
        alt: "",
        src: N
      })]
    })
  };

function g(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [o, _] = i.useState(""), [f, N] = i.useState(false), [I, g] = i.useState(null), A = i.useRef(null);
  i.useEffect(() => {
    var e;
    r && (null == (e = A.current) || e.focus())
  }, [r]);
  let C = e => {
    e.preventDefault();
    let t = o.trim();
    if ("" === t) return void g(m.intl.string(m.t.IRq5ah));
    g(null), N(true);
    let r = t.split("/"),
      l = r[r.length - 1];
    c.Ay.resolveInvite(l, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (N(false), null == t) return void g(m.intl.string(m.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = c.Ay.getInviteContext("Join Guild", t);
        c.Ay.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.Ay.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof u.Wl || e instanceof u.LG ? g((0, p.s)(e.code)) : g(m.intl.string(m.t.dDZRdy))
        })
      }
    }, e => {
      N(false);
      let t = new u.Wl(e);
      g((0, p.s)(t.code))
    })
  };
  return (0, l.jsxs)("div", {
    children: [(0, l.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      className: S.wx,
      direction: d.A.Direction.VERTICAL,
      separator: false,
      children: [(0, l.jsx)(s.Heading, {
        className: S.DD,
        variant: "heading-xl/semibold",
        children: m.intl.string(m.t.riOUtB)
      }), (0, l.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: m.intl.string(m.t["7jub2t"])
      }), (0, l.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: S.b,
        onClick: n
      })]
    }), (0, l.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: S.__invalid_content,
      children: [(0, l.jsx)("form", {
        onSubmit: C,
        className: S.$j,
        children: (0, l.jsx)(s.ksK, {
          label: m.intl.string(m.t.qreV25),
          required: true,
          error: I,
          value: o,
          onChange: _,
          placeholder: "".concat(T).concat(b),
          inputRef: A
        })
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: m.intl.string(m.t.Bnq46H)
      }), (0, l.jsx)("div", {
        className: S.eU,
        children: O.map(e => (0, l.jsx)(s.DUT, {
          className: S.Bb,
          onClick: () => _(e),
          children: e
        }, e))
      }), (0, l.jsx)(E, {
        onClick: n
      })]
    }), (0, l.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: S.qr,
      children: [(0, l.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t["Ts/9Ac"]),
        loading: f,
        onClick: C
      }), (0, l.jsx)(a.$n, {
        "data-migration-pending": true,
        color: a.$n.Colors.PRIMARY,
        look: a.$n.Looks.LINK,
        size: a.$n.Sizes.MIN,
        onClick: t,
        children: m.intl.string(m.t["13/7kX"])
      })]
    })]
  })
}