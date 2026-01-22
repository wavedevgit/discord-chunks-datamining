/** Chunk was on 342 **/
/** chunk id: 710265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk664007 = require("./664007.jsx"),
  Chunk405810 = require("./405810.jsx"),
  Chunk366098 = require("./366098.js"),
  Chunk918192 = require("./918192.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk794782 = require("./794782.js"),
  Chunk974930 = require("./974930.js"),
  Chunk691012 = require("./691012.js"),
  Chunk422845 = require("./422845.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk362561 = require("./362561.js");

function y(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: y,
    error: A,
    validationErrorMessage: N,
    onChange: E,
    canSetFocus: C = false
  } = e, {
    entityType: P,
    channelId: S,
    description: T,
    name: w,
    image: I,
    scheduledEndTime: D,
    scheduledStartTime: k,
    recurrenceRule: G
  } = t, R = (0, u.D3)(S), _ = (0, u.Xk)(S), L = null != t && (0, g.Fd)(t), M = r.useMemo(() => {
    let e = (0, m.N5)(t);
    return null != e ? e : {
      startDate: s()(k)
    }
  }, [t, k]), [U, z] = r.useState(() => (0, m.z7)(s()(k), G)), V = r.useRef(null);
  r.useEffect(() => {
    if (C) {
      var e;
      null == (e = V.current) || e.focus()
    }
  }, [C]);
  let F = e => {
      E({
        image: e
      })
    },
    B = (e, t) => {
      null == e || true === t ? F(null) : (0, a.mMO)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("35929"), n.e("79149"), n.e("74571"), n.e("39533")]).then(n.bind(n, 142630));
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
            return F(t)
          },
          uploadType: p.HL.SCHEDULED_EVENT_IMAGE
        }, n))
      })
    },
    H = null == A ? true : A.getFirstFieldErrorMessage("name"),
    X = null == A ? true : A.getFirstFieldErrorMessage("description"),
    Y = null == H && null == X ? null == A ? true : A.getAnyErrorMessage() : null;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: b.GU,
      children: null != S && !L && (R > 0 || _ > 0) && (0, l.jsx)(d.Bw, {
        channelId: S
      })
    }), (0, l.jsx)("div", {
      className: b.Zd,
      children: (0, l.jsxs)(a.BJc, {
        gap: 16,
        children: [(0, l.jsx)(a.ksK, {
          label: f.intl.string(f.t["0HbEQ6"]),
          required: true,
          error: null != H ? H : Y,
          onChange: e => {
            E({
              name: e
            })
          },
          placeholder: f.intl.string(f.t["6/yars"]),
          maxLength: v.t_,
          value: w,
          autoComplete: "off",
          inputRef: V
        }), (0, l.jsx)(j.A, {
          className: b.kz,
          onScheduleChange: e => {
            let {
              startDate: t,
              endDate: n
            } = e, l = {
              scheduledStartTime: null == t ? true : t.toISOString(),
              scheduledEndTime: null == n ? true : n.toISOString()
            };
            null != t && null != D && (null == n ? true : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != U && (l.recurrenceRule = (0, m.nG)(U, t)), E(l)
          },
          onRecurrenceChange: e => {
            let t = M.startDate;
            null == t || (E({
              recurrenceRule: (0, m.nG)(e, t)
            }), z(e))
          },
          schedule: M,
          recurrenceRule: G,
          showEndDate: P === v.Ps.EXTERNAL,
          requireEndDate: P === v.Ps.EXTERNAL,
          disableStartDateTime: L,
          guildId: y
        }), (0, l.jsx)(O, {
          error: N
        }), (0, l.jsx)(a.fs1, {
          label: f.intl.string(f.t["+gRCC7"]),
          error: X,
          placeholder: f.intl.string(f.t["kWO/E8"]),
          value: T,
          onChange: e => {
            E({
              description: e
            })
          },
          maxLength: v.IJ,
          autosize: true
        }), (0, l.jsx)(a.D0$, {
          label: f.intl.string(f.t.Ly121e),
          description: f.intl.string(f.t.B9C9be),
          children: null != I ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.A, {
              className: b.km,
              iconWrapperClassName: b.WR,
              image: I,
              makeURL: e => {
                if (null == e) return null;
                if (null != y) {
                  var n;
                  return null != (n = (0, h.A)((0, x.hQ)(t, y, i))) ? n : null
                }
              },
              onChange: B,
              hint: f.intl.string(f.t.G44Xml),
              showRemoveButton: false,
              enabled: true
            }), (0, l.jsx)(a.Button, {
              variant: "primary",
              size: "sm",
              text: f.intl.string(f.t.gmUvO1),
              onClick: () => F(null)
            })]
          }) : (0, l.jsx)(c.A, {
            size: "sm",
            variant: "primary",
            onChange: B,
            text: f.intl.string(f.t.vKCGYb)
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
  return null == t ? null : (0, l.jsx)(a.Text, {
    color: "text-feedback-critical",
    variant: "text-xs/normal",
    className: b.$e,
    children: t
  })
}