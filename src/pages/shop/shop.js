import React  from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({match}) => {

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};



export default ShopPage;
