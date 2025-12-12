/** Chunk was on 61 **/
/** chunk id: 195367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk516129 = require("./516129.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk440371 = require("./440371.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823783 = require("./823783.js");

function y(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: y,
    error: E,
    validationErrorMessage: N,
    onChange: C,
    canSetFocus: P = false
  } = e, {
    entityType: S,
    channelId: I,
    description: Z,
    name: T,
    image: w,
    scheduledEndTime: k,
    scheduledStartTime: D,
    recurrenceRule: R
  } = t, _ = (0, u._d)(I), A = (0, u.K3)(I), G = null != t && (0, g.xt)(t), U = r.useMemo(() => {
    let e = (0, m.v1)(t);
    return null != e ? e : {
      startDate: a()(D)
    }
  }, [t, D]), [L, z] = r.useState(() => (0, m.zi)(a()(D), R)), F = r.useRef(null);
  r.useEffect(() => {
    if (P) {
      var e;
      null == (e = F.current) || e.focus()
    }
  }, [P]);
  let M = e => {
      C({
        image: e
      })
    },
    V = (e, t) => {
      if (null == e || true === t) return void M(null);
      (0, s.ZDy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("48564")]).then(n.bind(n, 712451));
        return n => (0, l.jsx)(r, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          imageUri: e,
          file: t,
          onCrop: e => {
            let {
              imageUri: t
            } = e;
            return M(t)
          },
          uploadType: p.pC.SCHEDULED_EVENT_IMAGE
        }, n))
      })
    },
    B = null == E ? true : E.getFirstFieldErrorMessage("name"),
    X = null == E ? true : E.getFirstFieldErrorMessage("description"),
    W = null == B && null == X ? null == E ? true : E.getAnyErrorMessage() : null;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: b.blockedUsersContainer,
      children: null != I && !G && (_ > 0 || A > 0) && (0, l.jsx)(d.mv, {
        channelId: I
      })
    }), (0, l.jsx)("div", {
      className: b.form,
      children: (0, l.jsxs)(s.Kqy, {
        gap: 16,
        children: [(0, l.jsx)(s.oil, {
          label: j.intl.string(j.t["0HbEQ6"]),
          required: true,
          error: null != B ? B : W,
          onChange: e => {
            C({
              name: e
            })
          },
          placeholder: j.intl.string(j.t["6/yars"]),
          maxLength: f.p,
          value: T,
          autoComplete: "off",
          inputRef: F
        }), (0, l.jsx)(v.Z, {
          className: b.formItem,
          onScheduleChange: e => {
            let {
              startDate: t,
              endDate: n
            } = e, l = {
              scheduledStartTime: null == t ? true : t.toISOString(),
              scheduledEndTime: null == n ? true : n.toISOString()
            };
            null != t && null != k && (null == n ? true : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != L && (l.recurrenceRule = (0, m.mF)(L, t)), C(l)
          },
          onRecurrenceChange: e => {
            let t = U.startDate;
            null != t && (C({
              recurrenceRule: (0, m.mF)(e, t)
            }), z(e))
          },
          schedule: U,
          recurrenceRule: R,
          showEndDate: S === f.WX.EXTERNAL,
          requireEndDate: S === f.WX.EXTERNAL,
          disableStartDateTime: G,
          guildId: y
        }), (0, l.jsx)(O, {
          error: N
        }), (0, l.jsx)(s.Kx8, {
          label: j.intl.string(j.t["+gRCC7"]),
          error: X,
          placeholder: j.intl.string(j.t["kWO/E8"]),
          value: Z,
          onChange: e => {
            C({
              description: e
            })
          },
          maxLength: f.wm,
          autosize: true
        }), (0, l.jsx)(s.gNt, {
          label: j.intl.string(j.t.Ly121e),
          description: j.intl.string(j.t.B9C9be),
          children: null != w ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Z, {
              className: b.imagePreview,
              iconWrapperClassName: b.imagePreviewInner,
              image: w,
              makeURL: e => {
                if (null == e) return null;
                if (null != y) {
                  var n;
                  return null != (n = (0, h.Z)((0, x.Gb)(t, y, i))) ? n : null
                }
              },
              onChange: V,
              hint: j.intl.string(j.t.G44Xml),
              showRemoveButton: false,
              enabled: true
            }), (0, l.jsx)(s.Button, {
              variant: "primary",
              size: "sm",
              text: j.intl.string(j.t.gmUvO1),
              onClick: () => M(null)
            })]
          }) : (0, l.jsx)(c.Z, {
            size: "sm",
            variant: "primary",
            onChange: V,
            text: j.intl.string(j.t.vKCGYb)
          })
        })]
      })
    })]
  })
}

function O(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, l.jsx)(s.Text, {
    color: "text-feedback-critical",
    variant: "text-xs/normal",
    className: b.warning,
    children: t
  })
}