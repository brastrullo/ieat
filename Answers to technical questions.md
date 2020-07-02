# Answers to technical questions
## How long did you spend on the coding assignment?
I got carried away and I ended up spending about 8 hours on it.

## What would you add to your solution if you had more time? 
I would definitely improve the fetch and the search/filter functionality.
Also I didn't get to complete the styling.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
I haven't used Dynamic Import yet but I've added React's React.lazy/Suspense syntax to this project. Native code-splitting is something I'm really excited to use.
I'm still tinkering with it but here's a snippet of my using React.Lazy/Suspense:

`const RestaurantCard = React.lazy(() => import('./RestaurantCard'));`
            <Suspense key={`l${i}`} fallback={<div>Loading...</div>}>
              <RestaurantCard
                id={id}
                i={i}
                name={name}
                address={address}
                city={city}
                state={state}
                postal_code={postal_code}
                area={area}
                price={price}
                url={url}
              />
            </Suspense>


## How would you track down a performance issue in production? Have you ever had to do this?
Yes, but taking care of issues before they hit prod was also part of good processes. CIs take care of a lot and was heavily used in the companies I worked for. Automation is key. For issues post-prod I did a bit of A/B testing.
Profiling test applications are pretty useful too.

## How would you improve the API that you just used?
Being able to be more precise with the data would be nice. I would definitely add more options to the API. For example images were not loading and didn't have different sizing for optimization.

## Please describe yourself using JSON.
JSON is heavily used for most modern APIs so I practiced a lot with using it. A good understanding of JS objects help a lot.