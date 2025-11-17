/** Chunk was on 54844 **/
/** chunk id: 266080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [m, p] = i.useState(false), g = c.Z.getGuild(t), _ = null != g;
  i.useEffect(() => {
    p(!_)
  }, [_]);
  let h = i.useCallback(() => {
    p(true), a.ZP.trackWithMetadata(d.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), s.Z.leaveGuild(t)
  }, [t, n]);
  return null == g ? null : (0, r.jsx)(o.JZ, {
    title: u.intl.string(u.t.cU96ip),
    description: u.intl.formatToPlainString(u.t["26mR6/"], {
      guildName: null == g ? true : g.name
    }),
    buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
    buttonDisabled: m,
    buttonVariant: "critical-primary",
    onButtonPress: () => {
      (0, l.h7j)(e => {
        var t, n;
        return (0, r.jsx)(l.ConfirmModal, (t = function(e) {
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
        }({
          header: u.intl.formatToPlainString(u.t["1GX6P/"], {
            name: g.name
          }),
          confirmText: u.intl.string(u.t.J2TBi3),
          cancelText: u.intl.string(u.t["ETE/oC"]),
          onConfirm: h
        }, e), n = n = {
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: u.intl.format(u.t.ZEXC0r, {
              name: g.name
            })
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }
  })
}