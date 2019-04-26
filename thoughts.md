### considerations for lidar UI

* JSON data
```
{ 
  property_roofs: [
    { 
      id: <PropertyId>,
      facets: [
        {
          id: <FacetId>,
    
          // 2d array of (x,y) points that describe a polygon, 
          // these can also be used to find 2d area but 
          // I'm not sure how to calculate it with slope. 
          // These points may initially come from image coordinates, but // could also be geoCoordinates. I think points come come 
          // from the facet masks. From these points, we should 
          // be able to calculate area once we have slope.
          polygonCoordnates:[[x,y],[x,y]...],

        // we could possibly use roof perimeter coordinates 
        // if we do not sufficent facet information if lidar
        // can resolve average pitch for a given area. 
        // maybe helpful link:
        // https://community.esri.com/thread/45438
        perimeterCoordinates: [[x,y],[x,y]...],

        }
      ]
    }
  ]
}

```

## UI considerations

### Happy Case
  * we have all of the data we need and can map image points to lat/lng and  use lidar to find elevation change and slop.
  * display all the data prescribed in the mocks: (slope diagram and area digram)

## Average Case
  * maybe we can only find an average pitch for the roof:
    * we can at least show that in the property details info
  *  can also display a composite footprint with all of the facets (maybe length of sides though it is no longer included in mocks)

## Sad Case
  * insufficent data to display: I'm not sure exaclty what would be lacking because it seems pretty likely that we should be able to get perimeter points. But if it turns out that the above two cases aren't possible, we could display some kind of not available messaging 
  