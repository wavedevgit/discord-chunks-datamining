/** Chunk was on 52081 **/
/** chunk id: 803585, original params: e,t,n (module,exports,require) **/
let r, l;
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
let I = "hTKzmak",
  O = (r = window.GLOBAL_ENV.INVITE_HOST, l = "", null == r && (r = location.host, l = Chunk652215.BVt.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(l, "/")),
  T = [I, "".concat(O).concat(I), "".concat(O).concat("wumpus-friends")],
  E = e => {
    let {
      onClick: t
    } = e;
    return (0, a.jsxs)(c.DUT, {
      className: m.qd,
      onClick: () => {
        t(), (0, p.pX)(b.BVt.GUILD_DISCOVERY)
      },
      children: [(0, a.jsx)("img", {
        width: 40,
        height: 40,
        className: m.aL,
        alt: "",
        src: N
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
          className: m.qg,
          variant: "heading-md/semibold",
          children: _.intl.string(_.t.DwDxDU)
        }), (0, a.jsx)(c.Text, {
          className: m.qg,
          variant: "text-xs/normal",
          children: _.intl.string(_.t["5RL4CD"])
        })]
      }), (0, a.jsx)("img", {
        className: m.y8,
        alt: "",
        src: S
      })]
    })
  };

function g(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [l, p] = o.useState(""), [b, S] = o.useState(false), [N, g] = o.useState(null), A = o.useRef(null);
  o.useEffect(() => {
    var e;
    r && (null == (e = A.current) || e.focus())
  }, [r]);
  let C = e => {
    e.preventDefault();
    let t = l.trim();
    if ("" === t) return void g(_.intl.string(_.t.IRq5ah));
    g(null), S(true);
    let r = t.split("/"),
      a = r[r.length - 1];
    s.Ay.resolveInvite(a, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (S(false), null == t) return void g(_.intl.string(_.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = s.Ay.getInviteContext("Join Guild", t);
        s.Ay.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), s.Ay.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof u.Wl || e instanceof u.LG ? g((0, f.s)(e.code)) : g(_.intl.string(_.t.dDZRdy))
        })
      }
    }, e => {
      S(false);
      let t = new u.Wl(e);
      g((0, f.s)(t.code))
    })
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(c.rQ0, {
      "data-migration-pending": true,
      className: m.wx,
      direction: d.A.Direction.VERTICAL,
      separator: false,
      children: [(0, a.jsx)(c.Heading, {
        className: m.DD,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.riOUtB)
      }), (0, a.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: _.intl.string(_.t["7jub2t"])
      }), (0, a.jsx)(c.s_y, {
        "data-migration-pending": true,
        className: m.b,
        onClick: n
      })]
    }), (0, a.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: m.__invalid_content,
      children: [(0, a.jsx)("form", {
        onSubmit: C,
        className: m.$j,
        children: (0, a.jsx)(c.ksK, {
          label: _.intl.string(_.t.qreV25),
          required: true,
          error: N,
          value: l,
          onChange: p,
          placeholder: "".concat(O).concat(I),
          inputRef: A
        })
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: _.intl.string(_.t.Bnq46H)
      }), (0, a.jsx)("div", {
        className: m.eU,
        children: T.map(e => (0, a.jsx)(c.DUT, {
          className: m.Bb,
          onClick: () => p(e),
          children: e
        }, e))
      }), (0, a.jsx)(E, {
        onClick: n
      })]
    }), (0, a.jsxs)(c.jlY, {
      "data-migration-pending": true,
      className: m.qr,
      children: [(0, a.jsx)(c.Button, {
        variant: "primary",
        text: _.intl.string(_.t["Ts/9Ac"]),
        loading: b,
        onClick: C
      }), (0, a.jsx)(i.$n, {
        "data-migration-pending": true,
        color: i.$n.Colors.PRIMARY,
        look: i.$n.Looks.LINK,
        size: i.$n.Sizes.MIN,
        onClick: t,
        children: _.intl.string(_.t["13/7kX"])
      })]
    })]
  })
}