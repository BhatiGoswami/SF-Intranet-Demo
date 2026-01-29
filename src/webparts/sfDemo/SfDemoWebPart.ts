import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import SfDemo from './components/SfDemo';
import { ISfDemoProps } from './components/ISfDemoProps';

export default class SfDemoWebPart extends BaseClientSideWebPart<any> {

  public render(): void {
    const element: React.ReactElement<ISfDemoProps> = React.createElement(
      SfDemo,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme(),
        environmentMessage: this._getEnvironmentMessage(),
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _isDarkTheme(): boolean {
    return false;
  }

  private _getEnvironmentMessage(): string {
    return 'Welcome to SF Intranet';
  }
}
