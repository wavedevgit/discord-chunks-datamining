/** Chunk was on 61 **/
/** chunk id: 195367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk516129 = require("./516129.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk236373 = require("./236373.js"),
  Chunk954313 = require("./954313.js"),
  Chunk405613 = require("./405613.js"),
  Chunk440371 = require("./440371.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230334 = require("./230334.js");

function b(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: b,
    error: N,
    validationErrorMessage: O,
    onChange: C,
    canSetFocus: S = false
  } = e, {
    entityType: T,
    channelId: Z,
    description: I,
    name: P,
    image: w,
    scheduledEndTime: D,
    scheduledStartTime: R,
    recurrenceRule: A
  } = t, G = (0, u._d)(Z), _ = (0, u.K3)(Z), k = null != t && (0, x.xt)(t), L = r.useMemo(() => {
    let e = (0, g.v1)(t);
    return null != e ? e : {
      startDate: a()(R)
    }
  }, [t, R]), [M, X] = r.useState(() => (0, g.zi)(a()(R), A)), W = r.useRef(null);
  r.useEffect(() => {
    if (S) {
      var e;
      null == (e = W.current) || e.focus()
    }
  }, [S]);
  let V = e => {
      C({
        image: e
      })
    },
    z = (e, t) => {
      if (null == e || true === t) return void V(null);
      (0, s.ZDy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("21046")]).then(n.bind(n, 712451));
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
            return V(t)
          },
          uploadType: f.pC.SCHEDULED_EVENT_IMAGE
        }, n))
      })
    },
    U = null == N ? true : N.getFirstFieldErrorMessage("name"),
    F = null == N ? true : N.getFirstFieldErrorMessage("description"),
    q = null == U && null == F ? null == N ? true : N.getAnyErrorMessage() : null;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: y.blockedUsersContainer,
      children: null != Z && !k && (G > 0 || _ > 0) && (0, l.jsx)(d.mv, {
        channelId: Z
      })
    }), (0, l.jsxs)("div", {
      className: y.form,
      children: [(0, l.jsxs)(s.xJW, {
        title: j.intl.string(j.t["0HbEQ0"]),
        className: y.topicFormItem,
        required: true,
        children: [(0, l.jsx)(s.oil, {
          onChange: e => {
            C({
              name: e
            })
          },
          placeholder: j.intl.string(j.t["6/yarq"]),
          maxLength: p.p,
          value: P,
          autoComplete: "off",
          inputRef: W
        }), (0, l.jsx)(E, {
          error: U
        }), (0, l.jsx)(E, {
          error: q
        })]
      }), (0, l.jsx)(h.Z, {
        className: y.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, l = {
            scheduledStartTime: null == t ? true : t.toISOString(),
            scheduledEndTime: null == n ? true : n.toISOString()
          };
          null != t && null != D && (null == n ? true : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != M && (l.recurrenceRule = (0, g.mF)(M, t)), C(l)
        },
        onRecurrenceChange: e => {
          let t = L.startDate;
          null != t && (C({
            recurrenceRule: (0, g.mF)(e, t)
          }), X(e))
        },
        schedule: L,
        recurrenceRule: A,
        showEndDate: T === p.WX.EXTERNAL,
        requireEndDate: T === p.WX.EXTERNAL,
        disableStartDateTime: k,
        guildId: b
      }), (0, l.jsx)(E, {
        error: O
      }), (0, l.jsxs)(s.xJW, {
        title: j.intl.string(j.t["+gRCCw"]),
        className: y.formItem,
        children: [(0, l.jsx)(s.Kx8, {
          placeholder: j.intl.string(j.t["kWO/Ex"]),
          value: I,
          onChange: e => {
            C({
              description: e
            })
          },
          maxLength: p.wm,
          autosize: true
        }), (0, l.jsx)(E, {
          error: F
        })]
      }), (0, l.jsxs)(s.xJW, {
        title: j.intl.string(j.t.Ly121d),
        className: y.formItem,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: y.addImageHint,
          children: j.intl.string(j.t.B9C9bW)
        }), null != w ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(o.Z, {
            className: y.imagePreview,
            iconWrapperClassName: y.imagePreviewInner,
            image: w,
            makeURL: e => {
              if (null == e) return null;
              if (null != b) {
                var n;
                return null != (n = (0, v.Z)((0, m.Gb)(t, b, i))) ? n : null
              }
            },
            onChange: z,
            hint: j.intl.string(j.t.G44Xmp),
            showRemoveButton: false,
            enabled: true
          }), (0, l.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: j.intl.string(j.t.gmUvOz),
            onClick: () => V(null)
          })]
        }) : (0, l.jsx)(c.Z, {
          size: "sm",
          variant: "primary",
          onChange: z,
          text: j.intl.string(j.t.vKCGYW)
        })]
      })]
    })]
  })
}

function E(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, l.jsx)(s.Text, {
    color: "text-danger",
    variant: "text-xs/normal",
    className: y.warning,
    children: t
  })
}