require 'sinatra'
require 'sinatra/json'
require 'ss_syntax'

get '/' do
  erb :index
end

post '/parse.json' do
  text = params[:text]
  html = SsSyntax::SsSyntax.new(text, :html).parse
  
  json :html => html
end
