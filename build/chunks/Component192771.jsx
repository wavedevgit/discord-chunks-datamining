/** Chunk was on 21738 **/
/** chunk id: 192771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk466472 = require("./466472.js"),
  Chunk29160 = require("./29160.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk212408 = require("./212408.jsx"),
  Chunk775228 = require("./775228.js"),
  Chunk255438 = require("./255438.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk629859 = require("./629859.js"),
  Chunk473169 = require("./473169.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends Chunk64700.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != e && null != e.availableKB && null != e.totalKB ? (0, r.jsx)(d.A, {
      total: e.totalKB,
      used: e.totalKB - e.availableKB
    }) : null
  }
  renderViewing() {
    let e, t, {
      path: n,
      label: i,
      editingPath: l,
      isDefault: a,
      metadata: o
    } = this.props;
    return null != o && (e = null != o.availableKB ? (0, h.Xq)(o.availableKB, {
      useKibibytes: true
    }) : null, t = null != o.totalKB ? (0, h.Xq)(o.totalKB, {
      useKibibytes: true
    }) : null), (0, r.jsxs)(u.A, {
      className: A.ce,
      align: u.A.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, r.jsxs)(u.A, {
        direction: u.A.Direction.VERTICAL,
        className: A.__invalid_descriptionWrapper,
        children: [(0, r.jsxs)(u.A, {
          align: u.A.Align.CENTER,
          children: [(0, r.jsx)(s.Heading, {
            className: A.nM,
            variant: "heading-md/semibold",
            children: null != i ? i : p.A.getLabelFromPath(n)
          }), a ? (0, r.jsx)("span", {
            className: A.Zn,
            children: f.intl.string(f.t.bBvAEH)
          }) : null]
        }), null != o && null != e && null != t ? (0, r.jsx)(c.A, {
          className: A.fw,
          hoverText: f.intl.formatToPlainString(f.t["Fxo9e+"], {
            available: e,
            total: t
          }),
          children: n
        }) : (0, r.jsx)(s.Text, {
          className: A.fw,
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: f.intl.string(f.t.bt75uw),
        disabled: null != l,
        onClick: this.handleStartEditing
      })]
    })
  }
  renderEditing() {
    let {
      path: e,
      hasGamesInstalledInPath: t
    } = this.props, {
      label: n,
      isDefault: i
    } = this.state;
    return (0, r.jsx)(s.ZpM, {
      editable: true,
      className: A.uP,
      children: (0, r.jsxs)(u.A, {
        children: [this.renderDiskUsageCircle(), (0, r.jsxs)(u.A.Child, {
          children: [(0, r.jsx)(s.ksK, {
            label: f.intl.string(f.t.AJkKCB),
            value: n,
            placeholder: p.A.getLabelFromPath(e),
            onChange: this.handleLabelChange
          }), (0, r.jsx)("div", {
            className: _.QX,
            children: (0, r.jsx)(s.ksK, {
              label: f.intl.string(f.t.lnUCwX),
              disabled: true,
              value: e
            })
          }), (0, r.jsx)("div", {
            className: A.gZ,
            children: (0, r.jsx)(s.Checkbox, {
              checked: null != i ? i : this.props.isDefault,
              disabled: this.props.isDefault,
              onChange: this.handleToggleDefault,
              label: f.intl.string(f.t.Z2MWuH)
            })
          }), (0, r.jsx)(s.cGx, {
            className: A.me
          }), (0, r.jsxs)(u.A, {
            children: [(0, r.jsx)(s.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: f.intl.string(f.t.iBUzS5),
              disabled: t || this.props.isDefault,
              onClick: this.handleRemoveLocation
            }), (0, r.jsx)(u.A, {
              justify: u.A.Justify.END,
              children: (0, r.jsxs)(s.ButtonGroup, {
                children: [(0, r.jsx)(s.Button, {
                  variant: "secondary",
                  size: "sm",
                  text: f.intl.string(f.t["ETE/oC"]),
                  onClick: this.handleStopEditing
                }), (0, r.jsx)(s.Button, {
                  variant: "active",
                  size: "sm",
                  text: f.intl.string(f.t["R3BPH+"]),
                  disabled: e === this.props.path && n === this.props.label && i === this.props.isDefault,
                  onClick: this.handleSaveChanges
                })]
              })
            })]
          })]
        })]
      })
    })
  }
  render() {
    return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing()
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      label: true,
      isDefault: null
    }), b(this, "handleStartEditing", () => {
      let {
        path: e,
        label: t,
        isDefault: n,
        onToggleEditing: r
      } = this.props;
      r(e), this.setState({
        label: t,
        isDefault: n
      })
    }), b(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), b(this, "handleRemoveLocation", () => {
      (0, a.A)({
        title: f.intl.string(f.t.iBUzS5),
        subtitle: f.intl.string(f.t["1XqeW2"]),
        confirmText: f.intl.string(f.t.iBUzS5),
        onConfirm: () => {
          this.handleStopEditing(), (0, o.JN)(this.props.path)
        }
      })
    }), b(this, "handleSaveChanges", () => {
      (0, o.a8)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), b(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), b(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class O extends Chunk64700.PureComponent {
  componentDidMount() {
    (0, o.UQ)(this.props.installationPaths.map(e => {
      let {
        path: t
      } = e;
      return t
    }))
  }
  render() {
    let {
      installationPaths: e,
      installationPathsMetadata: t,
      defaultInstallationPath: n
    } = this.props, {
      editingPath: i
    } = this.state;
    return (0, r.jsx)("div", {
      className: A.iE,
      children: (0, r.jsxs)(s.D0$, {
        label: f.intl.string(f.t.aLszkC),
        children: [e.map(e => {
          let {
            path: l,
            label: a
          } = e;
          return (0, r.jsx)(E, {
            path: l,
            label: a,
            metadata: t[l],
            isDefault: n === l,
            editingPath: i,
            hasGamesInstalledInPath: p.A.hasGamesInstalledInPath(l),
            onToggleEditing: this.handleToggleEditing
          }, l)
        }), (0, r.jsx)("div", {
          className: A.sW,
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: f.intl.string(f.t.pnZ2uk),
            disabled: !g.isPlatformEmbedded,
            onClick: this.handleAddInstallationLocation
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      editingPath: null
    }), b(this, "handleAddInstallationLocation", () => {
      m.Ay.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, o.SA)(e[0])
      })
    }), b(this, "handleToggleEditing", e => {
      this.setState({
        editingPath: e
      })
    })
  }
}
let y = Chunk311907.Ay.connectStores([Chunk775228.A], () => ({
  installationPaths: p.A.installationPaths,
  installationPathsMetadata: p.A.installationPathsMetadata,
  defaultInstallationPath: p.A.defaultInstallationPath
}))(O)