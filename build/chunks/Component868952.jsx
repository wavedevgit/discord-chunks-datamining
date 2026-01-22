/** Chunk was on 94286 **/
/** chunk id: 868952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk260509 = require("./260509.js"),
  Chunk317525 = require("./317525.js"),
  Chunk486020 = require("./486020.js"),
  Chunk488926 = require("./488926.js"),
  Chunk636042 = require("./636042.js"),
  Chunk652215 = require("./652215.js"),
  Chunk124759 = require("./124759.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk636250 = require("./636250.js");

function g(e) {
  let {
    guild: t
  } = e, n = x.Ay.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 120
  });
  return (0, s.jsxs)(l.rQ0, {
    className: j.wx,
    "data-migration-pending": true,
    children: [(0, s.jsx)("div", {
      className: j.O_,
      children: null != n ? (0, s.jsx)(l.euF, {
        src: n,
        "aria-label": t.name,
        size: l._3J.SIZE_120,
        className: j.__invalid_guildIcon
      }) : (0, s.jsx)("div", {
        className: j.q9,
        children: (0, d.Rb)(t)
      })
    }), (0, s.jsxs)("div", {
      className: j.TK,
      children: [(0, s.jsx)(l.Heading, {
        variant: "heading-lg/extrabold",
        color: "text-strong",
        children: p.intl.string(p.t.MatO7M)
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: p.intl.string(p.t.VyPIeu)
      })]
    })]
  })
}
let h = e => e.toString() === f.xBc.MENTION_EVERYONE.toString() ? p.intl.string(p.t.yCpsQw) : (0, c.hx)(e);

function v(e) {
  let {
    permissions: t
  } = e;
  return (0, s.jsxs)("div", {
    className: j.CZ,
    children: [(0, s.jsx)(l.Text, {
      className: j.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: p.intl.string(p.t["0WZKI4"])
    }), (0, s.jsx)("div", {
      className: j.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: j.ce,
        children: [(0, s.jsx)("div", {
          className: j.dT
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: h(e)
        })]
      }, t))
    })]
  })
}

function O(e) {
  let {
    permissions: t
  } = e;
  return (0, s.jsxs)("div", {
    className: j.CZ,
    children: [(0, s.jsx)(l.Text, {
      className: j.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: p.intl.string(p.t.Yo5qlq)
    }), (0, s.jsx)("div", {
      className: j.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: j.ce,
        children: [(0, s.jsx)("div", {
          className: j.xE
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: h(e)
        })]
      }, t))
    })]
  })
}

function y(e) {
  let {
    permissions: t
  } = e, {
    enabledPermissions: n,
    disabledPermissions: r
  } = t;
  return (0, s.jsx)(l.$mQ, {
    "data-migration-pending": true,
    children: (0, s.jsxs)("div", {
      className: j.tp,
      children: [(0, s.jsx)(v, {
        permissions: n
      }), (0, s.jsx)(O, {
        permissions: r
      })]
    })
  })
}

function N(e) {
  let {
    onConfirm: t,
    onDismiss: n
  } = e;
  return (0, s.jsx)(l.jlY, {
    className: j.qr,
    "data-migration-pending": true,
    children: (0, s.jsxs)(a.e2v, {
      fullWidth: true,
      children: [(0, s.jsx)(a.$nd, {
        variant: "secondary",
        text: p.intl.string(p.t.gWQZvr),
        onClick: n
      }), (0, s.jsx)(a.$nd, {
        text: p.intl.string(p.t.iOSdAW),
        onClick: t
      })]
    })
  })
}

function _(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: a
  } = e, c = r.useMemo(() => {
    let e = [],
      n = [];
    return b.dR.map(s => {
      m.Ib(s, t) ? e.push(s) : n.push(s)
    }), {
      enabledPermissions: e,
      disabledPermissions: n
    }
  }, [t]);
  if (null == t) return null;
  let d = async () => {
    var e, n;
    let s = null != t ? o.A.getEveryoneRole(t) : true;
    if (null == s) return;
    let r = i.TF(s.permissions, b.e$);
    await (0, u.JY)(t.id, [(e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), s.forEach(function(t) {
          var s;
          s = n[t], t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = s
        })
      }
      return e
    }({}, s), n = n = {
      permissions: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        n.push.apply(n, s)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e)]), a()
  };
  return (0, s.jsxs)(l.EOs, {
    transitionState: n,
    size: l.rIJ.SMALL,
    className: j.yl,
    parentComponent: "DisableRiskyPermsModal",
    "data-migration-pending": true,
    children: [(0, s.jsx)(g, {
      guild: t
    }), (0, s.jsx)(y, {
      permissions: c
    }), (0, s.jsx)(N, {
      onConfirm: d,
      onDismiss: () => {
        a()
      }
    })]
  })
}