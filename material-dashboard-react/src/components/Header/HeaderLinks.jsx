import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { Person, Search } from "material-ui-icons";

import { CustomInput, IconButton as SearchButton, Button } from "mdcomponents";
import { Payments } from "components";

import headerLinksStyle from "mdvariables/styles/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogout = () => {
    this.handleClose();
    window.location = "/api/logout";
  };

  renderLoggedOutContent() {
    return (
      <Button color="primary" href="/auth/google">
        Login with google
      </Button>
    );
  }

  renderLoggedInContent() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.top + " " + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
        <Manager style={{ display: "inline-block" }}>
          <Target>
            <IconButton
              color="inherit"
              aria-label="Profile"
              aria-owns={open ? "menu-list" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.buttonLink}
            >
              <Person className={classes.links} />
              <Hidden mdUp>
                <p onClick={this.handleClick} className={classes.linkText}>
                  Profile
                </p>
              </Hidden>
            </IconButton>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Credits: {this.props.auth.credits}
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleLogout}
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                    <Payments>
                      <MenuItem className={classes.dropdownItem}>Add credits</MenuItem>
                    </Payments>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }

  render() {
    if (this.props.auth) {
      return this.renderLoggedInContent();
    }
    return this.renderLoggedOutContent();
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(
  withStyles(headerLinksStyle)(HeaderLinks)
);
