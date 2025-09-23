/** Chunk was on 61 **/
/** chunk id: 195367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk886025 = require("./886025.jsx"),
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

function O(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: O,
    error: N,
    validationErrorMessage: C,
    onChange: P,
    canSetFocus: S = false
  } = e, {
    entityType: I,
    channelId: T,
    description: w,
    name: Z,
    image: k,
    scheduledEndTime: D,
    scheduledStartTime: R,
    recurrenceRule: A
  } = t, _ = (0, d._d)(T), z = (0, d.K3)(T), G = null != t && (0, x.xt)(t), M = l.useMemo(() => {
    let e = (0, h.v1)(t);
    return null != e ? e : {
      startDate: a()(R)
    }
  }, [t, R]), [U, L] = l.useState(() => (0, h.zi)(a()(R), A)), V = l.useRef(null);
  l.useEffect(() => {
    if (S) {
      var e;
      null == (e = V.current) || e.focus()
    }
  }, [S]);
  let F = e => {
      P({
        image: e
      })
    },
    X = (e, t) => {
      if (null == e || true === t) return void F(null);
      (0, o.ZDy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("21046")]).then(n.bind(n, 712451));
        return n => (0, r.jsx)(l, function(e) {
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
          imageUri: e,
          file: t,
          onCrop: e => {
            let {
              imageUri: t
            } = e;
            return F(t)
          },
          uploadType: f.pC.SCHEDULED_EVENT_IMAGE
        }, n))
      })
    },
    W = null == N ? true : N.getFirstFieldErrorMessage("name"),
    q = null == N ? true : N.getFirstFieldErrorMessage("description"),
    B = null == W && null == q ? null == N ? true : N.getAnyErrorMessage() : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.blockedUsersContainer,
      children: null != T && !G && (_ > 0 || z > 0) && (0, r.jsx)(m.mv, {
        channelId: T
      })
    }), (0, r.jsx)("div", {
      className: y.form,
      children: (0, r.jsxs)(o.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(o.oil, {
          label: b.intl.string(b.t["0HbEQ0"]),
          required: true,
          error: null != W ? W : B,
          onChange: e => {
            P({
              name: e
            })
          },
          placeholder: b.intl.string(b.t["6/yarq"]),
          maxLength: j.p,
          value: Z,
          autoComplete: "off",
          inputRef: V
        }), (0, r.jsx)(p.Z, {
          className: y.formItem,
          onScheduleChange: e => {
            let {
              startDate: t,
              endDate: n
            } = e, r = {
              scheduledStartTime: null == t ? true : t.toISOString(),
              scheduledEndTime: null == n ? true : n.toISOString()
            };
            null != t && null != D && (null == n ? true : n.isBefore(t)) && (r.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != U && (r.recurrenceRule = (0, h.mF)(U, t)), P(r)
          },
          onRecurrenceChange: e => {
            let t = M.startDate;
            null != t && (P({
              recurrenceRule: (0, h.mF)(e, t)
            }), L(e))
          },
          schedule: M,
          recurrenceRule: A,
          showEndDate: I === j.WX.EXTERNAL,
          requireEndDate: I === j.WX.EXTERNAL,
          disableStartDateTime: G,
          guildId: O
        }), (0, r.jsx)(E, {
          error: C
        }), (0, r.jsx)(o.Kx8, {
          label: b.intl.string(b.t["+gRCCw"]),
          error: q,
          placeholder: b.intl.string(b.t["kWO/Ex"]),
          value: w,
          onChange: e => {
            P({
              description: e
            })
          },
          maxLength: j.wm,
          autosize: true
        }), (0, r.jsx)(s.N, {
          label: b.intl.string(b.t.Ly121d),
          description: b.intl.string(b.t.B9C9bW),
          children: null != k ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.Z, {
              className: y.imagePreview,
              iconWrapperClassName: y.imagePreviewInner,
              image: k,
              makeURL: e => {
                if (null == e) return null;
                if (null != O) {
                  var n;
                  return null != (n = (0, v.Z)((0, g.Gb)(t, O, i))) ? n : null
                }
              },
              onChange: X,
              hint: b.intl.string(b.t.G44Xmp),
              showRemoveButton: false,
              enabled: true
            }), (0, r.jsx)(o.zxk, {
              variant: "primary",
              size: "sm",
              text: b.intl.string(b.t.gmUvOz),
              onClick: () => F(null)
            })]
          }) : (0, r.jsx)(u.Z, {
            size: "sm",
            variant: "primary",
            onChange: X,
            text: b.intl.string(b.t.vKCGYW)
          })
        })]
      })
    })]
  })
}

function E(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, r.jsx)(o.Text, {
    color: "text-danger",
    variant: "text-xs/normal",
    className: y.warning,
    children: t
  })
}