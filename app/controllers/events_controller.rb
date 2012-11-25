class EventsController < ApplicationController
  # GET /events
  # GET /events.json
  def index
    #@events = Event.all

    #Se crea un query que contiene el nombre de la categoría para poder mostrarlo en los infowindows
    #del googlemap del index.
    @events = Event.find_by_sql("SELECT e.*, c.name as category_name FROM events e, categories c WHERE e.category_id = c.id")


    #se agregan las categorias para poder navegar a través de ellas.
    @categories = Category.all



    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @events }
    end
  end


  #Para poder mostrar los eventos de una categoria especifica
  # GET /events/1/categorize
  def categorize
    #sólo muestra los eventos de cierta categoría.
    #@events = Event.where(["category_id = ?", params[:id]]).all
    @events = Event.find_by_sql(["SELECT e.*, c.name as category_name FROM events e, categories c WHERE c.id = ? AND e.category_id = c.id", params[:id]])
    
    #se agregan las categorias para poder navegar a través de ellas.
    @categories = Category.all

    #se renderiza la misma vista del index para reutilización.
    render :index

   # respond_to do |format|
    #  format.html # categorize.html.erb
    #  format.json { render json: @events }
    #end
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    @event = Event.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(params[:event])

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render json: @event, status: :created, location: @event }
      else
        format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(params[:id])

    respond_to do |format|
      if @event.update_attributes(params[:event])
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end
end
