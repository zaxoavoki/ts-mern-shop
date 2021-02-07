import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Account from "../components/settings/Account";
import Address from "../components/settings/Address";
import AsideLink from "../components/settings/AsideLink";
import Password from "../components/settings/Password";

const links = [
  { text: "Account", icon: "person", link: "account" },
  { text: "Address", icon: "geo-alt", link: "address" },
  { text: "Password", icon: "shield-check", link: "password" },
];

export default function Settings({
  match,
}: RouteComponentProps<{
  action: string;
}>): React.ReactElement {
  return (
    <div>
      <h1 className="mb-4">Settings</h1>
      <div className="row">
        <div className="col-12 col-md-3">
          <ul className="list-unstyled">
            {links.map((e) => (
              <AsideLink key={e.link} action={match.params.action} link={e.link} text={e.text} icon={e.icon} />
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-9">
          <Route exact path={["/settings", "/settings/account"]} component={Account} />
          <Route exact path="/settings/address" component={Address} />
          <Route exact path="/settings/password" component={Password} />
        </div>
      </div>
    </div>
  );
}
