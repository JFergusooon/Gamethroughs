package ferguson.jeffrey.walkthroughproject;

public class Walkthrough {
    private int walkthroughId;
    private int userIdCreatedBy;
    private String htmlText;
    private int pageViews;
    private String gameTitle;
    private String pageTitle; 

    public Walkthrough() {}

    public Walkthrough(
            int walkthroughId, 
            int userIdCreatedBy, 
            String htmlText, 
            int pageViews, 
            String gameTitle, 
            String pageTitle) {
               setWalkthroughId(walkthroughId);
               setUserIdCreatedBy(userIdCreatedBy);
               setHtmlText(htmlText);
               setPageViews(pageViews);
               setGameTitle(gameTitle);
               setPageTitle(pageTitle); 
    }

    public int getWalkthroughId() {
        return walkthroughId;
    }

    public void setWalkthroughId(int walkthroughId) {
        this.walkthroughId = walkthroughId;
    }

    public int getUserIdCreatedBy() {
        return userIdCreatedBy;
    }

    public void setUserIdCreatedBy(int userIdCreatedBy) {
        this.userIdCreatedBy = userIdCreatedBy;
    }

    public String getHtmlText() {
        return htmlText;
    }

    public void setHtmlText(String htmlText) {
        this.htmlText = htmlText;
    }

    public int getPageViews() {
        return pageViews;
    }

    public void setPageViews(int pageViews) {
        this.pageViews = pageViews;
    }

    public String getGameTitle() {
        return gameTitle;
    }

    public void setGameTitle(String gameTitle) {
        this.gameTitle = gameTitle;
    }

    public String getPageTitle() {
        return pageTitle;
    }

    public void setPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
    }

}
