/** Chunk was on 5606 **/
/** chunk id: 709913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk900686 = require("./900686.js"),
  Chunk518142 = require("./518142.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk662758 = require("./662758.jsx"),
  Chunk179690 = require("./179690.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    backupCodes: t,
    hasTOTPEnabled: n,
    currentUser: b
  } = e, h = i.useCallback(e => {
    (0, l.qfG)(t => (0, r.jsx)(c.A, f(g({}, t), {
      password: e
    })), {
      stackingBehavior: "stack"
    })
  }, []), A = i.useCallback(() => {
    (0, l.qfG)(e => (0, r.jsx)(u.default, f(g({}, e), {
      handleSubmit: e => s.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
        h(e)
      }),
      title: m.intl.string(m.t.PsQmzU),
      actionText: m.intl.string(m.t.ajkYcF)
    })))
  }, [h]), E = i.useCallback(() => {
    let e = t.map(e => {
        let {
          consumed: t,
          code: n
        } = e;
        return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(used)" : "")
      }).join("\r\n"),
      n = m.intl.formatToPlainString(m.t["uYWwh/"], {
        email: b.email
      });
    return "".concat(n, "\r\n\r\n").concat(e)
  }, [t, b.email]), x = i.useMemo(() => t.length > 0 ? (0, r.jsx)(o.A, {
    fileContents: E,
    contentType: "text/plain",
    fileName: "discord_backup_codes.txt",
    children: (0, r.jsx)(l.Button, {
      variant: "primary",
      size: "sm",
      text: m.intl.string(m.t.qZZUy6)
    })
  }) : (0, r.jsx)(d.x, {
    setting: _.H.ACCOUNT_VIEW_BACKUP_CODES,
    children: (0, r.jsx)(l.Button, {
      variant: "primary",
      size: "sm",
      text: m.intl.string(m.t.xZEzbu),
      onClick: A
    })
  }), [t.length, E, A]), O = i.useCallback(() => {
    a.A.show({
      title: m.intl.string(m.t["D+aE7g"]),
      body: m.intl.string(m.t.EA4ZEk),
      cancelText: m.intl.string(m.t["ETE/oC"]),
      onConfirm: () => s.A.disable()
    })
  }, []);
  return (0, r.jsx)(l.D0$, {
    label: m.intl.string(m.t.EPVq00),
    description: m.intl.string(m.t.bQwxib),
    children: (0, r.jsxs)(l.ButtonGroup, {
      size: "sm",
      children: [x, n && (0, r.jsx)(d.x, {
        setting: _.H.ACCOUNT_REMOVE_2FA,
        children: (0, r.jsx)(l.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: m.intl.string(m.t["D+aE7g"]),
          onClick: O
        })
      }), !n && (0, r.jsx)(d.x, {
        setting: _.H.ACCOUNT_ENABLE_2FA,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t.cDgKte),
          onClick: p.Ay.enableMFA
        })
      })]
    })
  })
}