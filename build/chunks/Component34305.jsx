/** Chunk was on 1272 **/
/** chunk id: 34305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk325432 = require("./325432.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk579022 = require("./579022.jsx"),
  Chunk391690 = require("./391690.js"),
  Chunk424218 = require("./424218.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk14934 = require("./14934.js"),
  Chunk478411 = require("./478411.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class O extends Chunk473749.PureComponent {
  renderDiskUsageCircle() {
    let {
      metadata: e
    } = this.props;
    return null != e && null != e.availableKB && null != e.totalKB ? (0, r.jsx)(d.Z, {
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
      metadata: s
    } = this.props;
    return null != s && (e = null != s.availableKB ? (0, f.BU)(s.availableKB, {
      useKibibytes: true
    }) : null, t = null != s.totalKB ? (0, f.BU)(s.totalKB, {
      useKibibytes: true
    }) : null), (0, r.jsxs)(u.Z, {
      className: b.installationPath,
      align: u.Z.Align.CENTER,
      children: [this.renderDiskUsageCircle(), (0, r.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        className: b.__invalid_descriptionWrapper,
        children: [(0, r.jsxs)(u.Z, {
          align: u.Z.Align.CENTER,
          children: [(0, r.jsx)(o.Heading, {
            className: b.rowTitle,
            variant: "heading-md/semibold",
            children: null != i ? i : p.Z.getLabelFromPath(n)
          }), a ? (0, r.jsx)("span", {
            className: b.defaultIndicator,
            children: m.intl.string(m.t.bBvAEH)
          }) : null]
        }), null != s && null != e && null != t ? (0, r.jsx)(c.Z, {
          className: b.rowBody,
          hoverText: m.intl.formatToPlainString(m.t["Fxo9e+"], {
            available: e,
            total: t
          }),
          children: n
        }) : (0, r.jsx)(o.Text, {
          className: b.rowBody,
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: m.intl.string(m.t.bt75uw),
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
    return (0, r.jsx)(o.Zbd, {
      editable: true,
      className: b.installationPathEditing,
      children: (0, r.jsxs)(u.Z, {
        children: [this.renderDiskUsageCircle(), (0, r.jsxs)(u.Z.Child, {
          children: [(0, r.jsx)(o.oil, {
            label: m.intl.string(m.t.AJkKCB),
            value: n,
            placeholder: p.Z.getLabelFromPath(e),
            onChange: this.handleLabelChange
          }), (0, r.jsx)("div", {
            className: _.marginTop20,
            children: (0, r.jsx)(o.oil, {
              label: m.intl.string(m.t.lnUCwX),
              disabled: true,
              value: e
            })
          }), (0, r.jsx)("div", {
            className: b.defaultLocationCheckbox,
            children: (0, r.jsx)(o.Checkbox, {
              checked: null != i ? i : this.props.isDefault,
              disabled: this.props.isDefault,
              onChange: this.handleToggleDefault,
              label: m.intl.string(m.t.Z2MWuH)
            })
          }), (0, r.jsx)(o.izJ, {
            className: b.separator
          }), (0, r.jsxs)(u.Z, {
            children: [(0, r.jsx)(o.Button, {
              variant: "critical-secondary",
              size: "sm",
              text: m.intl.string(m.t.iBUzS5),
              disabled: t || this.props.isDefault,
              onClick: this.handleRemoveLocation
            }), (0, r.jsx)(u.Z, {
              justify: u.Z.Justify.END,
              children: (0, r.jsxs)(o.ButtonGroup, {
                children: [(0, r.jsx)(o.Button, {
                  variant: "secondary",
                  size: "sm",
                  text: m.intl.string(m.t["ETE/oC"]),
                  onClick: this.handleStopEditing
                }), (0, r.jsx)(o.Button, {
                  variant: "active",
                  size: "sm",
                  text: m.intl.string(m.t["R3BPH+"]),
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
    super(...e), E(this, "state", {
      label: true,
      isDefault: null
    }), E(this, "handleStartEditing", () => {
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
    }), E(this, "handleStopEditing", () => {
      let {
        onToggleEditing: e
      } = this.props;
      e(null), this.setState({
        label: true,
        isDefault: null
      })
    }), E(this, "handleRemoveLocation", () => {
      (0, a.Z)({
        title: m.intl.string(m.t.iBUzS5),
        subtitle: m.intl.string(m.t["1XqeW2"]),
        confirmText: m.intl.string(m.t.iBUzS5),
        onConfirm: () => {
          this.handleStopEditing(), (0, s.iD)(this.props.path)
        }
      })
    }), E(this, "handleSaveChanges", () => {
      (0, s.Tb)(this.props.path, {
        label: null != this.state.label ? this.state.label : this.props.label,
        isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
      }), this.handleStopEditing()
    }), E(this, "handleLabelChange", e => {
      this.setState({
        label: e
      })
    }), E(this, "handleToggleDefault", () => {
      this.setState({
        isDefault: !this.state.isDefault
      })
    })
  }
}
class v extends Chunk473749.PureComponent {
  componentDidMount() {
    (0, s.ec)(this.props.installationPaths.map(e => {
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
      className: b.wrapper,
      children: (0, r.jsxs)(o.gNt, {
        label: m.intl.string(m.t.aLszkC),
        children: [e.map(e => {
          let {
            path: l,
            label: a
          } = e;
          return (0, r.jsx)(O, {
            path: l,
            label: a,
            metadata: t[l],
            isDefault: n === l,
            editingPath: i,
            hasGamesInstalledInPath: p.Z.hasGamesInstalledInPath(l),
            onToggleEditing: this.handleToggleEditing
          }, l)
        }), (0, r.jsx)("div", {
          className: b.buttonRowWrapper,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: m.intl.string(m.t.pnZ2uk),
            disabled: !g.isPlatformEmbedded,
            onClick: this.handleAddInstallationLocation
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      editingPath: null
    }), E(this, "handleAddInstallationLocation", () => {
      h.ZP.showOpenDialog(["openDirectory"]).then(e => {
        null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0])
      })
    }), E(this, "handleToggleEditing", e => {
      this.setState({
        editingPath: e
      })
    })
  }
}
let I = Chunk442837.ZP.connectStores([Chunk391690.Z], () => ({
  installationPaths: p.Z.installationPaths,
  installationPathsMetadata: p.Z.installationPathsMetadata,
  defaultInstallationPath: p.Z.defaultInstallationPath
}))(v)